import React from 'react';

const InvoiceForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Invoice Number</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Invoice Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Due Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Notes</label>
                    <textarea></textarea>
                </div>
                <button type="submit">Save</button>
            </form>

        </div>
    );
};

export default InvoiceForm;