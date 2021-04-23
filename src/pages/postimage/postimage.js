function Postimage() {
    require('./postimage.css');
    return (
        <>
            <div className="burger">
                <div></div>
            </div>

            <header>
                <h1>Post Image</h1>
            </header>
            <form>
                <fieldset>
                    <input type="text" id="title" name="title" placeholder="Post Title" required/>
                    <br/>
                    <input type="text" id="description" name="description" placeholder="Description" required/>
                    <br/>
                    <input style={{fontSize: '1.2em'}} type="file" id="attachments" name="attachments"
                           placeholder="Attach Image(s)" multiple/>
                    <br/>
                    <input type="password" id="confirmation" name="confirmation" placeholder="Password" required/>
                    <br/>
                    <input type="checkbox" id="policy" name="policy" required/>
                    <label for="policy" className="flex-label">I accept the <a className="tos"
                                                                               href="https://www.independent.co.uk/life-style/gadgets-and-tech/starship-sn10-spacex-elon-musk-b1807169.html"
                                                                               target="_blank">Acceptable Use
                        Policy</a> for
                        uploading images</label>
                    <br/>
                </fieldset>
                <fieldset>
                    <button id="register">Submit Post</button>
                </fieldset>
            </form>

            <footer>
                <div>
                    <small>Carbon neutral since 2021</small>
                </div>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-twitter"></i></a></li>
                </ul>
            </footer>
        </>
    );
}

export default Postimage;