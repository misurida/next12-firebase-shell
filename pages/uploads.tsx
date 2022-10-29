import { InternationalizationStaticProps } from '../types/shell'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useFirestore } from '../hooks/useFirestore'
import { Title, Box } from '@mantine/core'
import { NextPage } from 'next'
import MediaManager from '../components/structure/input/MediaManager'

export async function getStaticProps({ locale }: InternationalizationStaticProps) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } }
}

const UploadsPage: NextPage = () => {
  const { t } = useTranslation()
  const { uploads } = useFirestore()

  return (
    <Box>
      <MediaManager data={uploads} title={<Title order={2} mb="md">{t('uploads')}</Title>} />
    </Box>
  )
}

export default UploadsPage