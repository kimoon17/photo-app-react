import profile from "../../images/profile.JPG";
import castle from "../../images/castle.jpg";
import './styles.scss'

const Post = () => <section className="post">
    <div className="post-img-section">
        <div>
            <img className="post-profile" src={profile} alt="post-profile"/>
        </div>
        <div>
            <p className="likes">kimoon</p>
        </div>
    </div>
    <div className="post-main-img">
        <img className="post-img" src={castle} alt="About post - the tv show Castle"/>
    </div>
    <section className="comments">
        <input type="text"/>
        <p>comment</p>
        <p>another comment</p>
        <p>a third comment</p>
    </section>
</section>

export default Post