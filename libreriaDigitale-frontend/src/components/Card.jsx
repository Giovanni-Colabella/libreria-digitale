function Card({ children, bg = 'bg-yellow-600' }) {
    return (
        <div
            className={ `${bg} p-6 rounded-lg shadow-md` }
        >
            { children }
        </div>
    );
}

export default Card;