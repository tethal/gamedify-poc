'use client'
import React from 'react';
import {
  GridGenerator,
  HexGrid,
  Layout,
  Path,
  Text,
  Hexagon,
  Hex,
  Pattern,
  HexUtils,
} from 'react-hexgrid';

export default function Home() {
  return (  
        <HexGrid  className='bg-zinc-950 w-full h-screen'>
          {/* Grid with manually inserted hexagons */}
          <Layout
            size={{ x: 4, y: 4 }}
            flat={true}
            spacing={1.1}
            origin={{ x: 0, y: 2 }}
          >
            <Hexagon q={0} r={0} s={0}>
              <Text>1</Text>
            </Hexagon>
            <Hexagon q={-1} r={1} s={0}>
              <Text>2</Text>
            </Hexagon>
            <Hexagon q={0} r={1} s={-1}>
              <Text>3</Text>
            </Hexagon>
            <Hexagon q={-2} r={2} s={0}>
              <Text>4</Text>
            </Hexagon>
            <Hexagon q={-1} r={2} s={-1}>
              <Text>5</Text>
            </Hexagon>
            <Hexagon q={0} r={2} s={-2}>
              <Text>6</Text>
            </Hexagon>
            <Hexagon q={-3} r={3} s={0}>
              <Text>7</Text>
            </Hexagon>
            <Hexagon q={-2} r={3} s={-1}>
              <Text>8</Text>
            </Hexagon>
            <Hexagon q={-1} r={3} s={-2}>
              <Text>9</Text>
            </Hexagon>
            <Hexagon q={0} r={3} s={-3}>
              <Text>10</Text>
            </Hexagon>
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
        </HexGrid>
 
  );
}
