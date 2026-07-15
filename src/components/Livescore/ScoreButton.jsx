import { useNavigate } from 'react-router-dom';
import './ScoreButton.css' // Make sure your CSS is imported!

export default function FloatingButtons() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="floating-actions-container">
            
            {/* 1. TOP: The LIVE Score Button goes here first! */}
            <button 
                className="live-route-btn" 
                onClick={() => navigate('/Scores')}
                aria-label="Go to Live Scores"
            >
                <span className="live-pulse-small"></span>
                Click 👉🏻 LIVE 
            </button>

           

            
            
        </div>
    );
}