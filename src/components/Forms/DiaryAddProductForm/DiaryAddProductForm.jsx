import { toast } from 'react-toastify';
import {
  DiaryAddProductFormStyled,
  FlexWrapper,
} from './DiaryAddProductForm.styled';
import { AddProductButton, AddProductIcon, InputGrams } from './AddProduct.mui';
import { useSelector } from 'react-redux';

import { useEffect, useMemo, useState } from 'react';
import { LifeSearch } from 'components/LiveSearch';
import debounce from 'lodash/debounce';
import { formatISO } from 'date-fns';

import { useMobileModal } from 'hooks/ui';
import { useTranslation } from 'react-i18next';

const limit = 10;
export const DiaryAddProductForm = ({ addProduct, isMobile }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [productId, setProductId] = useState('');

  const [, , hideMobileModal] = useMobileModal();

  


  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const weight = Number(formData.get('weight').trim());

    
    
    try {
      form.reset();

      if (isMobile) {
        hideMobileModal();
      }
    } catch (error) {
      toast(`Not added: ${error.message}`);
      console.log(error);
    }
  };

  const debouncedGetProducts = useMemo(
    () => debounce(getProducts, 500),
    [getProducts]
  );

  useEffect(() => {
    if (!title.length) return;

    debouncedGetProducts({ title, limit });
  }, [debouncedGetProducts, getProducts, title]);

  return (
    <DiaryAddProductFormStyled onSubmit={handleSubmit}>
      <LifeSearch
        items={products}
        setProductId={setProductId}
        inputValue={title}
        onInputChange={(_, newTitle) => setTitle(newTitle)}
      />

      {/* TODO: check mockup add product form */}
      <FlexWrapper>
        <InputGrams
          variant="standard"
          name="weight"
          label={t('grams')}
          type="text"
          title="min 1, max 6 digits"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,6}' }}
          required
        />
      </FlexWrapper>

      <AddProductButton color="primary" variant="contained" type="submit">
        {isMobile ? 'Add' : <AddProductIcon />}
      </AddProductButton>
    </DiaryAddProductFormStyled>
  );
};
