import { useEffect, useState } from 'react';

import DropDown from './DrowDown';
import Color from './Color';
import { Colors } from '../../constants';

const { cardColors } = Colors;

export default function ColorPicker({
    className = '',
    pickerClassName = 'top-4 right-4',
    dropdownClassName = 'top-11 right-4',
    dropdownStyle = {},
    children,
    selectedColor,
    setSelectedColor,
}) {
    const [showColorPicker, setShowColorPicker] = useState(false);

    function closeColorPicker(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        setShowColorPicker(false);
    }

    useEffect(() => {
        window.addEventListener('click', closeColorPicker);
        return () => {
            window.removeEventListener('click', closeColorPicker);
        };
    }, []);

    const renderBgColors = (colors) => (
        colors.map((color) => (
            <Color
                key={color?.id}
                xs
                color={color}
                onClick={() => setSelectedColor(color)}
            />
        ))
    );

    return (
        <div
            className={`relative group w-full h-full flex flex-row justify-center items-center ${className}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div
                className={`${showColorPicker ? 'block' : 'hidden group-hover:block'} absolute ${pickerClassName} cursor-pointer`}
                onClick={(e) => setShowColorPicker(show => !show)}
            >
                <span
                    className={`p-1 rounded-full hover:bg-white/30 ${selectedColor?.textClassName || 'text-lime-700'}`}
                >
                    <i className="fa-solid fa-paint-brush" />
                </span>
            </div>
            {showColorPicker && (
                <DropDown
                    xs
                    className={`absolute ${dropdownClassName}`}
                    style={dropdownStyle}
                    menus={[
                        {
                            id: 'basic-colors',
                            title: 'Basic Colors',
                            component: renderBgColors(cardColors.basic),
                        },
                        {
                            id: 'fancy-colors',
                            title: 'Fancy Colors',
                            component: renderBgColors(cardColors.fancy),
                        }
                    ]}
                />
            )}
            <div
                className="w-full h-full"
                onClick={closeColorPicker}
            >
                {children}
            </div>
        </div>
    )
}
