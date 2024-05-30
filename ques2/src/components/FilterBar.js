import React from 'react';

function FilterBar() {
    return (
        <div className="my-4">
            <h2 className="text-lg font-bold">Filter Products</h2>
            {/* Add your filter options here */}
            <div className="flex space-x-4">
                <select className="border rounded-md px-2 py-1">
                    <option value="">Category</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                    {/* Add more options as needed */}
                </select>
                <select className="border rounded-md px-2 py-1">
                    <option value="">Company</option>
                    <option value="AMZ">AMZ</option>
                    <option value="FLP">FLP</option>
                    {/* Add more options as needed */}
                </select>
                <select className="border rounded-md px-2 py-1">
                    <option value="">Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    {/* Add more options as needed */}
                </select>
                <select className="border rounded-md px-2 py-1">
                    <option value="">Price Range</option>
                    <option value="0-1000">0-1000</option>
                    <option value="1001-5000">1001-5000</option>
                    {/* Add more options as needed */}
                </select>
                <select className="border rounded-md px-2 py-1">
                    <option value="">Availability</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
    );
}

export default FilterBar;
