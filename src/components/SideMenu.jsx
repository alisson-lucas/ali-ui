'use client'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';

export default function SideMenu() {
    return (
        <Sidebar className='relative top-0 bg-white text-black mt-20 text-sm pt-10'>
            <Menu>
                <MenuItem> Início </MenuItem>
                <MenuItem> Como Usar </MenuItem>
                <SubMenu label="Componentes" defaultOpen={true}>
                    <MenuItem component={<Link href="/" />}> Headers </MenuItem>
                    <MenuItem component={<Link href="/components/hero" />}> Banners </MenuItem>
                    <MenuItem component={<Link href="/components/about" />}> Sobre </MenuItem>
                    <MenuItem component={<Link href="/components/features" />}> Diferenciais/Ofertas </MenuItem>
                    <MenuItem component={<Link href="/components/numbers" />}> Seções com números </MenuItem>
                    <MenuItem component={<Link href="/components/contact" />}> Contato </MenuItem>
                    <MenuItem component={<Link href="/components/ctas" />}> CTA's </MenuItem>
                    <MenuItem component={<Link href="/components/footers" />}> Footers </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}