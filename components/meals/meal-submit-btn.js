'use client';

import { useFormStatus } from 'react-dom';

export default function MealsSubmitBtn() {

    const status = useFormStatus();
    return (
        <button type="submit" disabled={status.pending}>
            {status.pending ? 'Submitting...' : 'Share Meal'}
        </button>
    );
}