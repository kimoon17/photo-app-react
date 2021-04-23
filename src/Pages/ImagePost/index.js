import './style.scss';
import Post from '../../Components/Post/index'

function ImagePost() {
    return (
        <>
            <header>
                <h1 className="imagePostHeading">Image Post</h1>
            </header>
            <Post />
        </>
    );
}

export default ImagePost;