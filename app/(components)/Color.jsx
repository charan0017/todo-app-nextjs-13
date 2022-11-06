export default function Color({ xs, color, onClick }) {
    return (
        <div
            className="w-full px-5 py-0.5 cursor-pointer flex flex-row gap-4 flex-nowrap"
            onClick={onClick}
        >
            <div
                className={`${xs ? 'w-4 h-4' : 'w-6 h-6'} rounded-full border border-solid ${color?.className}`}
            />
            <div className={`whitespace-nowrap ${xs ? 'text-xs' : 'text-sm'} font-light my-auto`}>
                {color?.name}
            </div>
        </div>
    );
}
