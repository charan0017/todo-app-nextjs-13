import { useState, Fragment } from 'react';

export default function DropDown({
    xs = false,
    className = '',
    style= {},
    defaultActiveTab = '',
    menus = [],
}) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    return (
        <div
            className={`w-fit max-h-48 py-2 overflow-y-auto flex flex-col bg-white rounded-lg border border-solid shadow shadow-xl drop-shadow-xl ${className}`}
            style={style}
        >
            {menus.map((menu, index) => (
                <Fragment key={menu.id}>
                    <div
                        className={`w-full px-4 flex flex-row gap-2 flex-nowrap justify-between items-center cursor-pointer border ${activeTab === menu?.id ? 'border-solid bg-gray-100' : 'border-transparent'} border-x-0 border-b-0 hover:bg-gray-100`}
                        onClick={() => setActiveTab((id) => id === menu?.id ? '' : menu?.id)}
                    >
                        <p className={`${xs ? 'text-xs' : 'text-sm'} font-light whitespace-nowrap`}>
                            {menu.title}
                        </p>
                        <span className="">
                            <i className="fa-solid fa-caret-down" />
                        </span>
                    </div>
                    <div className={`${activeTab === menu?.id ? 'block opacity-100' : 'hidden opacity-0'} py-1 border border-solid border-x-0 border-t-0 transform-all duration-200 ease-inout`}>
                        {menu.component}
                    </div>
                </Fragment>
            ))}
        </div>
    );
}
