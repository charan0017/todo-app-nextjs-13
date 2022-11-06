'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import withRedux from '../../hoc/withRedux';
import { changeDefaultBackgroundColor } from '../../redux/actions';

import Color from './Color';
import DropDown from './DrowDown';
import { Colors } from '../../constants';

const { bgColors, defaultBgColor } = Colors;

function NavBar({ children }) {
    const selectedBgColor = useSelector((state) => state?.defaultBgColor || defaultBgColor);
    const dispatch = useDispatch();
    function setSelectedBgColor(color) {
        dispatch(changeDefaultBackgroundColor(color));
    }
    const [showMenu, setShowMenu] = useState(false);

    function closeMenu() {
        setShowMenu(false)
    }

    useEffect(() => {
        window.addEventListener('click', closeMenu);
        return () => {
            window.removeEventListener('click', closeMenu);
        };
    }, []);

    const renderBgColors = (colors) => (
        colors.map((color) => (
            <Color
                key={color?.id}
                color={color}
                onClick={() => setSelectedBgColor(color)}
            />
        ))
    );

    return (
        <div className={`w-full min-h-screen h-full p-16 ${selectedBgColor?.className}`}>
            <div
                className="fixed z-50 top-6 right-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <span
                        className={`p-1 rounded-full border ${showMenu ? ' border-solid' : 'border-transparent'} cursor-pointer`}
                        onClick={() => setShowMenu(show => !show)}
                    >
                        <i className="fa-solid fa-paint-brush" />
                    </span>
                    {showMenu && (
                        <DropDown
                            className="absolute top-8 right-0"
                            menus={[
                                {
                                    id: 'basic-colors',
                                    title: 'Basic Colors',
                                    component: renderBgColors(bgColors.basic),
                                },
                                {
                                    id: 'fancy-colors',
                                    title: 'Fancy Colors',
                                    component: renderBgColors(bgColors.fancy),
                                }
                            ]}
                        />
                    )}
                </div>
            </div>
            {children}
        </div>
    )
}

export default withRedux(NavBar);
