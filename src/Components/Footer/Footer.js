import React, { memo } from 'react';
import { Box, Typography, Grid, TextField, Button, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const FooterSection = () => {
  const { t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <Box
      sx={{
        backgroundColor: '#002D62 ', // Navy background from your palette
        color: '#FFFFFF',
        padding: '50px 5%',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Upper Section with Title, Subtitle, and Button */}
      <Grid container spacing={4} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: isArabic ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
              color: '#FFFFFF',
              textAlign: isArabic ? 'right' : 'left',
            }}
          >
            {t('footerSection.upperTitle')}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              marginTop: 2,
              fontFamily: isArabic ? 'Cairo, sans-serif' : 'Open Sans, sans-serif',
              color: '#CCCCCC', // Subtle grey for description
              textAlign: isArabic ? 'right' : 'left',
            }}
          >
            {t('footerSection.upperSubtitle')}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F36F21', // Orange button from your palette
              color: '#FFFFFF',
              padding: '10px 30px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#E96E00',
              },
              fontFamily: isArabic ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
            }}
          >
            {t('footerSection.links.aboutUs')}
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: '#CCCCCC', margin: '40px 0' }} />

      {/* Bottom Section with Logo, Email, and Lists */}
      <Grid container spacing={{ xs: 4, md: 20 }}>
        {/* Left Side - Logo, Description, and Email Input */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: isArabic ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
              color: '#FFFFFF',
              marginBottom: '10px',
            }}
          >
            {t('companyName')}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: '#CCCCCC',
              marginBottom: '30px',
              fontFamily: isArabic ? 'Cairo, sans-serif' : 'Open Sans, sans-serif',
            }}
          >
            {t('footerSection.companyDescription')}
          </Typography>

          {/* Email Input */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F4F4F4',
              borderRadius: '8px',
              padding: '5px',
              width: '100%',
            }}
          >
            <TextField
              fullWidth
              placeholder={t('footerSection.emailPlaceholder')}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  borderColor: 'transparent',
                },
                input: { padding: '10px 15px' },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F36F21', // Orange button
                color: '#FFFFFF',
                marginLeft: isArabic ? "0" : '10px',
                marginRight: isArabic ? '10px' : '0',
                padding: '10px 30px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#E96E00',
                },
              }}
            >
              {t('footerSection.emailSubmit')}
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Links (Home, Security, Social Media) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            {/* Links Section */}
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: isArabic ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                }}
              >
                {t('footerSection.links.home')}
              </Typography>
              <Typography sx={{ color: '#CCCCCC', marginTop: 1, fontFamily: isArabic ? "Cairo, sans-serif" : 'Open Sans, sans-serif' }}>
                {t('footerSection.links.aboutUs')}
              </Typography>
              <Typography sx={{ color: '#CCCCCC', marginTop: 1, fontFamily: isArabic ? "Cairo, sans-serif" : 'Open Sans, sans-serif' }}>
                {t('footerSection.links.collection')}
              </Typography>
              <Typography sx={{ color: '#CCCCCC', marginTop: 1, fontFamily: isArabic ? "Cairo, sans-serif" : 'Open Sans, sans-serif' }}>
              {t('footerSection.links.blogNews')}
              </Typography>
            </Grid>

            {/* Security Links */}
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: isArabic ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                }}
              >
                {t('footerSection.links.security.title')}
              </Typography>
              <Typography sx={{ color: '#CCCCCC', marginTop: 1, fontFamily: isArabic ? "Cairo, sans-serif" : 'Open Sans, sans-serif' }}>
                {t('footerSection.links.security.privacyPolicy')}
              </Typography>
              <Typography sx={{ color: '#CCCCCC', marginTop: 1, fontFamily: isArabic ? "Cairo, sans-serif" : 'Open Sans, sans-serif' }}>
                {t('footerSection.links.security.userAgreements')}
              </Typography>
              <Typography sx={{ color: '#CCCCCC', marginTop: 1, fontFamily: isArabic ? "Cairo, sans-serif" : 'Open Sans, sans-serif' }}>
                {t('footerSection.links.security.copyright')}
              </Typography>
            </Grid>

            {/* Social Media Links */}
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: isArabic ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                }}
              >
                {t('footerSection.links.socialMedia.title')}
              </Typography>
              <IconButton sx={{ color: '#FFFFFF' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: '#FFFFFF' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#FFFFFF' }}>
                <TwitterIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(FooterSection);