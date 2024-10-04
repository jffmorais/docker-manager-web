'use client';

import Link from "next/link";
// import { usePathname } from "next/navigation";

const links = [
    {name: 'Containers', href:'/containers'},
    {name: 'Images', href: '/containers/images'},
    {name: 'Volumes', href: '/containers/volumes'}
];

export default function NavLinks(){
    return (
        <>
        {links.map((link)=>{
            return (
                <Link key={link.name} href={link.href}><p>{link.name}</p></Link>
            )
        })}
        </>
    );
}
