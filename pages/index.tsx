import { InternationalizationStaticProps } from '../types/shell'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from 'next-i18next'
import { Title, Box } from '@mantine/core'
import { NextPage } from 'next'
import { useData } from '../hooks/useData'

export async function getStaticProps({ locale }: InternationalizationStaticProps) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } }
}

const Home: NextPage = () => {
  const { t } = useTranslation()
  const { data } = useData()

  return (
    <Box>
      <Title order={2} mb="md">{t('dashboard')}</Title>
    </Box>
  )
}

export default Home