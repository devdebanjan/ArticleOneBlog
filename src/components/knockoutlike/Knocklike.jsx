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
                .eq('article_id', articleId) // 1. Fixed typo: 'article_Id' changed to lowercase 'article_id'
                .maybeSingle();

            if (error) {
                console.error('Error fetching likes:', error);
            } else if (data) {
                setLikes(data.likes_count); // 2. Fixed typos: 'setLiked' changed to 'setLikes' & 'like_Count' changed to 'likes_count'
            }
        };
        
        fetchLikes();
    }, [articleId, storageKey]);

    const toggleLike = async () => {
        if (isProcessing) return;
        setIsProcessing(true);

        const newHasLiked = !hasLiked; 
        const newLikesCount = newHasLiked ? likes + 1 : Math.max(0, likes - 1); 

        // 3. Optimistic UI Update: update state instantly so the user sees the change immediately!
        setLikes(newLikesCount);
        setHasLiked(newHasLiked);

        if (newHasLiked) {
            localStorage.setItem(storageKey, 'true');
        } else {
            localStorage.removeItem(storageKey);
        }

        const { data: existingRow } = await supabase
            .from('knock_out_like')
            .select('id')
            .eq('article_id', articleId)
            .maybeSingle();
        
        let dbError;
    
        if (existingRow) {
            const { error } = await supabase
                .from('knock_out_like')
                .update({ likes_count: newLikesCount })
                .eq('article_id', articleId);
            dbError = error;
        } else {
            const { error } = await supabase
                .from('knock_out_like')
                .insert([{ article_id: articleId, likes_count: newLikesCount }]);
            dbError = error;
        }
    
        if (dbError) {
            console.error('Error saving likes to database:', dbError);
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