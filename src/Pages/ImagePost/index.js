import castle from '../../images/castle.jpg';
import profile from '../../images/profile.JPG';
import './style.scss';

function ImagePost() {
    return (
        <>
            <header>
                <h1>Image Post</h1>
            </header>

            <section className="post">
                <div className="post-img-section">
                    <div>
                        <img className="post-profile" src={profile}/>
                    </div>
                    <div>
                        <p className="likes">kimoon</p>
                    </div>
                </div>
                <div className="post-main-img">
                    <img className="post-img" src={castle} alt="Image about post - the tv show Castle"/>
                </div>
                <section className="comments">
                    <input type="text"/>
                    <p>comment</p>
                    <p>another comment</p>
                    <p>a third comment</p>
                </section>
            </section>

            <footer>
                <div>
                    <small>Carbon neutral since 2021</small>
                </div>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-facebook"/></a></li>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-instagram"/></a></li>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-twitter"/></a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default ImagePost;