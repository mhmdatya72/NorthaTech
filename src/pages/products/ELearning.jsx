import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const ELearning = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <Container maxWidth="lg" sx={{ py: 8 }} dir={isArabic ? 'rtl' : 'ltr'}>
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6, textAlign: 'center' }}>
                {t('products_elearning_name', 'منصة التعلم الإلكتروني')}
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            {t('elearning_what_title', 'ما هي منصة التعلم الإلكتروني؟')}
                        </Typography>
                        <Typography paragraph>
                            {t('elearning_what_desc', 'منصة التعلم الإلكتروني هي حل متكامل يوفر بيئة تعليمية متطورة عبر الإنترنت، تمكن المؤسسات التعليمية والشركات من تقديم محتوى تعليمي عالي الجودة وإدارة العملية التعليمية بكفاءة عالية.')}
                        </Typography>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            {t('elearning_features_title', 'المميزات الرئيسية')}
                        </Typography>
                        <Typography component="ul" sx={{ pl: 2, textAlign: isArabic ? 'right' : 'left' }}>
                            <li>{t('elearning_feature1', 'إدارة المحتوى التعليمي')}</li>
                            <li>{t('elearning_feature2', 'نظام اختبارات وتقييم متكامل')}</li>
                            <li>{t('elearning_feature3', 'متابعة تقدم المتعلمين')}</li>
                            <li>{t('elearning_feature4', 'تفاعل مباشر بين المعلم والمتعلم')}</li>
                            <li>{t('elearning_feature5', 'تقارير وإحصائيات شاملة')}</li>
                        </Typography>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            {t('elearning_benefits_title', 'الفوائد')}
                        </Typography>
                        <Typography component="ul" sx={{ pl: 2, textAlign: isArabic ? 'right' : 'left' }}>
                            <li>{t('elearning_benefit1', 'تعليم مرن ومتاح في أي وقت')}</li>
                            <li>{t('elearning_benefit2', 'توفير في التكاليف')}</li>
                            <li>{t('elearning_benefit3', 'توسيع نطاق الوصول للمتعلمين')}</li>
                            <li>{t('elearning_benefit4', 'تحسين جودة العملية التعليمية')}</li>
                            <li>{t('elearning_benefit5', 'سهولة التحديث والتطوير')}</li>
                        </Typography>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ELearning; 