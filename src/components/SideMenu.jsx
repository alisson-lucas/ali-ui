'use client'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { TbBook, TbComponents, TbHome, TbHome2, TbList, TbX } from "react-icons/tb";
import Link from 'next/link';
import { useState } from 'react';

export default function SideMenu(props) {

    return (
        <>
            <article
                className={`absolute top-12 -right-16 transition bg-white shadow-xl shadow-black/25 duration-200 p-2 bg-primary rounded-full hover:cursor-pointer hover:bg-primary z-40`}
                onClick={() => props.setCollapsed(!props.collapsed)}
            >
                {props.collapsed ? <TbList color="#000" size={26} /> : <TbX color="#000" size={26} />} 
            </article>
            <Sidebar className='relative h-screen bg-white text-black text-base pt-10' collapsed={props.collapsed}>
                <Menu>
                    <MenuItem icon={<TbHome2 size={22} />}> Início </MenuItem>
                    <MenuItem icon={<TbBook size={22} />}> Como Usar </MenuItem>
                    <SubMenu label="Componentes" icon={<TbComponents size={22} />} defaultOpen={true}>
                        <MenuItem component={<Link href="/" />}> Headers </MenuItem>
                        <MenuItem component={<Link href="/hero" />}> Banners </MenuItem>
                        <MenuItem component={<Link href="/about" />}> Sobre </MenuItem>
                        <MenuItem component={<Link href="/features" />}> Diferenciais/Ofertas </MenuItem>
                        <MenuItem component={<Link href="/numbers" />}> Seções com números </MenuItem>
                        <MenuItem component={<Link href="/contact" />}> Contato </MenuItem>
                        <MenuItem component={<Link href="/ctas" />}> CTA's </MenuItem>
                        <MenuItem component={<Link href="/footers" />}> Footers </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    )
}