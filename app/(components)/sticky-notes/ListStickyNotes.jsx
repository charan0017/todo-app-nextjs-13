import { useSelector } from 'react-redux';

import StickyNote from './StickyNote';
import StickyNoteStack from './StickyNoteStack';

export default function HomePage() {
    const stickyNotes = useSelector((state) => state?.stickyNotes || []);
    return (
        <div className="w-full h-full flex flex-row gap-16 flex-wrap justify-start items-start">
            <StickyNoteStack />
            {stickyNotes.map((stickyNote) => (
                <StickyNote
                    key={stickyNote?.id}
                    stickyNote={stickyNote}
                />
            ))}
        </div>
    );
}
