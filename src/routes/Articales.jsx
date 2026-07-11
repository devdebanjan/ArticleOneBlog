import React from 'react';
import { Link } from 'react-router-dom';
import './articles.css'; 
import { articlesData , featureData } from '../data/articlesData';

const Articales = () => {
  const featuredArticle = articlesData.find(article => article.isFeatured);
  const regularArticles = articlesData.filter(article => !article.isFeatured && !article.isUpcoming);
  const specialArticle = featureData.filter(article => !article.isFeatured && !article.isUpcoming);

  return (
    <div className="editorial-container fade-in">
      <header className="archive-header">
        <h1 className="main-title">The Archives</h1>
        <p className="sub-title">Explore tactical breakdowns, cultural narratives, and personal memories from the beautiful game.</p>
      </header>

      {/* --- 1. FEATURED ARTICLE --- */}
      {featuredArticle && (
        <section className="featured-article-section">
          <Link to={featuredArticle.link} className="featured-card">
            <div className="featured-image-wrapper">
              {featuredArticle.image ? (
                <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-image" />
              ) : (
                <div className="image-placeholder">
                   <span>COVER STORY</span>
                </div>
              )}
            </div>
            <div className="featured-content">
              <span className="category-tag">{featuredArticle.tag}</span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className="article-meta">
                <span>{featuredArticle.date}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      <div className="ornate-divider"></div>

      <h2 className="editorial-title">Featured Edition: </h2>
      {specialArticle.length > 0 && (
        <section className="standard-articles-grid">
          {specialArticle.map((article) => (
            <Link to={article.link} key={article.id} className="standard-card">
              <span className="category-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              
              {/* Image wrapper to enforce uniform height */}
              <div className="card-image-wrapper">
                <img className="featured-images" src={article.image} alt={article.title} />
              </div>
              
              <div className="read-more">Read Article &rarr;</div>
            </Link>
          ))}
        </section>
      )}
        
      <h2 className="editorial-title">Editorial Section : </h2>
      {regularArticles.length > 0 && (
        <section className="standard-articles-grid">
          {regularArticles.map((article) => (
            <Link to={article.link} key={article.id} className="standard-card">
              <span className="category-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              
              {/* Image wrapper to enforce uniform height */}
              <div className="card-image-wrapper">
                <img className="featured-images" src={article.image} alt={article.title} />
              </div>
              
              <div className="read-more">Read Article &rarr;</div>
            </Link>
          ))}
        </section>
      )}

      {/* --- 3. CURATION & OPEN CALL CTA --- */}
      <section className="curation-section">
        <div className="radar-container">
          <div className="radar-dot"></div>
          <div className="radar-pulse"></div>
        </div>
        
        <div className="curation-header">
          <h3>Curating New Stories...</h3>
          <p>We are currently drafting and editing our next set of deep dives, tactical analyses, and cultural essays.</p>
        </div>

        <div className="contribute-cta-box upgraded-box">
          <div className="cta-text">
            <span className="open-call-badge">OPEN CALL</span>
            <h3>Want to see your story here?</h3>
            <p>
              The best stories often come from the stands, the streets, and the lifelong fans. Whether you want to share a deeply personal memory, an opinion on tactical shirts, or a review of a historic match, this platform is open to your voice.
            </p>
            <p className="cta-highlight">
              Submit your drafts, ideas, or passion pieces. Let's build a tapestry of global football memories together.
            </p>
          </div>
          <div className="cta-action">
            <a href="mailto:workwithdebanjan07@gmail.com" className="publish-btn premium-btn">
              <span>SUBMIT AN ARTICLE</span>
              <span className="btn-icon">✍️</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Articales;