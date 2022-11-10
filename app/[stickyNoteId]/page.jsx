'use client';

import App from '../(components)/App';
import { CreateStickyNote } from '../(components)/sticky-notes';

export default function EditNote({ params }) {
    const stickyNoteId = params?.stickyNoteId;

    return (
        <App>
            <CreateStickyNote stickyNoteId={stickyNoteId} />
        </App>
    );
}
