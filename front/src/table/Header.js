export default function Header() {
    return (<thead className="bg-gray-50">
    <tr>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
        </th>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
        </th>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
        </th>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
        </th>
        <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
        </th>
    </tr>
    </thead>)
}