export default function Badge(props) {
    return (
        <div className="inline-block bg-app text-white italic px-2 py-1/2 rounded rounded-full">
            {props.children}
        </div>
    );
}
