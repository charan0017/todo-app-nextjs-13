'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { CreateStickyNote } from '../(components)/sticky-notes';

export default function EditNote({ params }) {
    const router = useRouter();
    const stickyNoteId = params?.stickyNoteId;
    const stickyNote = useSelector((state) => state.stickyNotes.find((stickyNote) => stickyNote.id === stickyNoteId));

    if (!stickyNote) {
        router.push('/');
        return null;
    }

    return <CreateStickyNote stickyNote={stickyNote} />;
}
