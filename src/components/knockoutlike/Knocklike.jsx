import { useState, useEffect } from 'react';
import { supabase } from '../../../supabaseClient';

export default function LikeCount({ articleId }) {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const storageKey = `Likes_${articleId}`;

    useEffect(() => {
        if (localStorage.getItem(storageKey) === 'true') {
            setHasLiked(true);
        }
        
        const fetchLikes = async () => {
            const { data, error } = await supabase
                .from('knock_out_like')
                .select('knock_like_count')
                .eq('article_id', articleId)
                .maybeSingle();

            if (error) {
                console.error('Error fetching likes:', error);
            } else if (data) {
                setLikes(data.knock_like_count); 
            }
        };
        
        fetchLikes();
    }, [articleId, storageKey]);

    const toggleLike = async () => {
        // Prevent clicking if missing ID or already processing
        if (isProcessing || !articleId) {
            console.error("Missing articleId! Check the parent component.");
            return;
        }
        
        setIsProcessing(true);

        const newHasLiked = !hasLiked; 
        const newLikesCount = newHasLiked ? likes + 1 : Math.max(0, likes - 1); 

        // Optimistic UI Update (Instant change for the user)
        setLikes(newLikesCount);
        setHasLiked(newHasLiked);

        if (newHasLiked) {
            localStorage.setItem(storageKey, 'true');
        } else {
            localStorage.removeItem(storageKey);
        }

        // The Magic Fix: UPSERT automatically inserts if new, or updates if exists
        const { error: dbError } = await supabase
            .from('knock_out_like')
            .upsert(
                { article_id: articleId, knock_like_count: newLikesCount },
                { onConflict: 'article_id' } // Tells Supabase what column to check for duplicates
            );
    
        if (dbError) {
            console.error('🔥 Supabase Error:', dbError.message);
            console.error('Full Error Details:', dbError);
            
            // Revert state back if database write fails
            setHasLiked(!newHasLiked);
            setLikes(likes);
        }
    
        setIsProcessing(false);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '60px auto 0 auto', borderTop: '2px dashed #e2e8f0', paddingTop: '50px' }}>
            <button 
                onClick={toggleLike} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={isProcessing}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 28px',
                    background: hasLiked ? '#ea580c' : 'transparent',
                    color: hasLiked ? '#ffffff' : 'var(--text-main)',
                    border: hasLiked ? '2px solid #ea580c' : '2px solid var(--text-main)',
                    borderRadius: '50px',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: '800',
                    fontSize: '16px',
                    cursor: isProcessing ? 'wait' : 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.02)',
                    transform: isHovered ? 'translateY(-2px)' : 'none',
                }}
            >
                <span>{hasLiked ? '❤️' : '♡'}</span>
                <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
            </button>
        </div>
    );
}