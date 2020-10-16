import PropType from 'prop-types';
import classNames from 'classnames';

export default function Button(props) {
    const classProps = classNames(
        'bg-app hover:bg-blue-900 text-white font-bold py-2 px-4 rounded',
        {
            'shadow': !!props.shadow,
        },
    );
    return <button className={classProps}>{props.children}</button>;
}

Button.propType = {
    shadow: PropType.bool,
};
