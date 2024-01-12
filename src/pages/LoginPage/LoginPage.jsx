import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonRegistration } from 'components/Forms/LoginForm/Mui';
import LoginForm from '../../components/Forms/LoginForm';
import { PageContainer, Title, BoxRelative } from './LoginPage.styled';
import Container from 'components/Container';
import Navigation from 'components/Header/Navigation';
import { useTranslation } from 'react-i18next';

const styles = {
  isHidden: {
    display: 'none',
  },
};

const LoginPage = () => {
  
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('routes.login');
  }, [t]);

  return (
    <Container>
      <PageContainer>
        
        <BoxRelative>
          <Title>{t('signIn')}</Title>
          <LoginForm />
          <NavLink to="/signup">
            <ButtonRegistration
              color="primary"
              variant="outlined"
              type="button"
            >
              {t('register')}
            </ButtonRegistration>
          </NavLink>
        </BoxRelative>
      </PageContainer>
    </Container>
  );
};

export default LoginPage;
