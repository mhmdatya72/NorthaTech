import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const ELearning = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
                منصة التعلم الإلكتروني
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            ما هي منصة التعلم الإلكتروني؟
                        </Typography>
                        <Typography paragraph>
                            منصة التعلم الإلكتروني هي حل متكامل يوفر بيئة تعليمية متطورة عبر الإنترنت، تمكن المؤسسات التعليمية والشركات من تقديم محتوى تعليمي عالي الجودة وإدارة العملية التعليمية بكفاءة عالية.
                        </Typography>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            المميزات الرئيسية
                        </Typography>
                        <Typography component="ul" sx={{ pl: 2 }}>
                            <li>إدارة المحتوى التعليمي</li>
                            <li>نظام اختبارات وتقييم متكامل</li>
                            <li>متابعة تقدم المتعلمين</li>
                            <li>تفاعل مباشر بين المعلم والمتعلم</li>
                            <li>تقارير وإحصائيات شاملة</li>
                        </Typography>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            الفوائد
                        </Typography>
                        <Typography component="ul" sx={{ pl: 2 }}>
                            <li>تعليم مرن ومتاح في أي وقت</li>
                            <li>توفير في التكاليف</li>
                            <li>توسيع نطاق الوصول للمتعلمين</li>
                            <li>تحسين جودة العملية التعليمية</li>
                            <li>سهولة التحديث والتطوير</li>
                        </Typography>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ELearning; 