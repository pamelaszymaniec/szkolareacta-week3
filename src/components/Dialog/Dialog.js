import "./dialog.scss";
import DialogBox from "./DialogBox";
import { useState } from "react";

function Dialog() {
    const [showDialog, setShowDialog] = useState(false)

    const handleShowDialog = () => {
        setShowDialog(true);
    }

    const handleCloseDialog = () => {
        setShowDialog(false);
    }

    return (
        <>
            <div className="mt-10 text-center">
                <button className="btn" onClick={handleShowDialog}>Show Dialog</button>
            </div>
            <DialogBox show={showDialog} title="Tytuł" description="Opis" close={handleCloseDialog} />

        </>

    );
}

export default Dialog;