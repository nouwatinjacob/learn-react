
let visibility = false

const detailInfo = () => {
   visibility = !visibility;
    toggleVisible();
};

const appRoot = document.getElementById('app');

const toggleVisible = () => {
    const visible = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={detailInfo}>
                {visibility ? 'Hide Details' : 'Show Details' }
            </button>
            {
                visibility && (
                    <div>
                    <p>This is the hidden infomation</p>
                    </div>
                )
            }
        </div>
    );
    ReactDOM.render(visible, appRoot);
}

toggleVisible();
