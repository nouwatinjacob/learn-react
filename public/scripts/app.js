'use strict';

var visibility = false;

var detailInfo = function detailInfo() {
    visibility = !visibility;
    toggleVisible();
};

var appRoot = document.getElementById('app');

var toggleVisible = function toggleVisible() {
    var visible = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: detailInfo },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'This is the hidden infomation'
            )
        )
    );
    ReactDOM.render(visible, appRoot);
};

toggleVisible();
