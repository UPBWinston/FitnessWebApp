//import Link from 'next/link'

import {useRouter} from 'next/router'
import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { NavButton,Navbar, Grid, Button, Link } from "@nextui-org/react";
import { Layout } from "./Layout.js";





export default function Home({data}) {
  const router = useRouter()

  
    
  
    return (
      <Layout>
        <Navbar isBordered variant="sticky">
          <Navbar.Content>

         
          <Navbar.Item>
               <Button  auto flat as ="button" onClick={() => router.push('/login')}>Login</Button>
            </Navbar.Item>
            
            
            <Navbar.Item>
              <Button  auto flat as ="button" onClick={() => router.push('/register')}>Register</Button>
            </Navbar.Item>

          </Navbar.Content>
        </Navbar>
      </Layout>
    )
  }

