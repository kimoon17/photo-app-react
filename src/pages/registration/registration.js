function Registration() {
    require('./registration.css');
    return (
        <>
            <div className="burger">
                <div></div>
            </div>

            <header>
                <h1>Register</h1>
            </header>
            <form>
                <fieldset>
                    <input type="text" id="username" name="username" placeholder="Username" className="form-el"/>
                    <br/>
                    <input type="email" id="email" name="email" placeholder="Email" className="form-el"/>
                    <br/>
                    <input id="password" name="password" placeholder="Password" className="form-el"/>
                    <br/>
                    <input id="password-confirm" name="password-confirm" placeholder="Confirm Password"
                           className="form-el"/>
                    <br/>
                    <div class="flex-label">
                        <input type="checkbox" id="confirmation" name="confirmation" required/>
                        <label for="confirmation">I am at least 13 years of age</label>
                    </div>
                    <br/>
                    <div class="flex-label">
                        <input type="checkbox" id="rules" name="rules" required/>
                        <label for="rules">I accept the <a
                            href="https://www.poetryfoundation.org/poems/44272/the-road-not-taken" target="_blank"
                            class="tos">TOS &amp; Privacy rules</a></label>
                    </div>
                </fieldset>
                <fieldset>
                    <button type="submit" id="register">Register</button>
                </fieldset>
            </form>

            <footer>
                <div>
                    &copy; Carbon neutral since 2021
                </div>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-facebook"/></a></li>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-instagram"/></a></li>
                    <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
                        className="fab fa-twitter"/></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Registration;