import { useActionState } from "react";
import { useNavigate } from "react-router-dom";

import { createItem } from "../../services/api";

type FormState = {
    error: string | null;
}

const initialState: FormState = {
    error: null,
}

const AddItemPage = () => {
    const navigate = useNavigate();
    const [state, formAction, isPending] = useActionState(
        async (_previousState: FormState, formData: FormData) => {
            try {
                await createItem(formData);
                navigate("/my-inventory");
                return {
                    error: null,
                };
            } catch (error) {
                return {
                    error: error instanceof Error
                        ? error.message
                        : "Something went wrong",
                }
            }
        },
        initialState
    )
    return (
        <>
            <h1>Add Item</h1>
            <form action={formAction}>

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                />

                <label htmlFor="material">Material</label>
                <input
                    id="material"
                    name="material"
                    type="text"
                />
                {state.error && (
                    <p>{state.error}</p>
                )}

                <button type="submit" disabled={isPending}>
                    {isPending ? "Adding..." : "Add item"}
                </button>
            </form>
        </>
    );
}

export default AddItemPage;