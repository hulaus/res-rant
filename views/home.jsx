const React = require('react')
const Def = require('./default')

function home() {
    return(
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                <img src="/images/healthyfood.jpg" alt="Healthy Food Bowl"/>
                <div>
                Photo by <a href="https://unsplash.com/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/photos/-YHSwy6uqvk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                </div>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home