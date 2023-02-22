import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'

const Repos = () => {
  const { repos } = useContext(GithubContext)

  // Chart Data
  const chartData = [
    {
      label: 'Javascript',
      value: '29',
    },
    {
      label: 'HTML',
      value: '260',
    },
    {
      label: 'CSS',
      value: '180',
    },
    {
      label: 'SASS',
      value: '140',
    },
  ]

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={chartData} />
        {/* <ExampleChart /> */}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
