import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {BarInput, BarActionButton} from '../../components/common';
import {RootView} from '../../components/styled/View';
import NavigationService from '../../navigation/NavigationService';

const LoginScreen = () => {
  login = (values) => {
    console.log({values});
    NavigationService.navigate('TabStack');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8),
  });

  return (
    <RootView justify="flex-start" align="center" background="transparent">
      <Formik
        validationSchema={validationSchema}
        initialValues={{email: 'a@a.com', password: '1234565789'}}
        onSubmit={(values) => login(values)}
        render={({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          submitCount,
        }) => (
          <View>
            <BarInput
              label="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorText={submitCount > 0 ? errors.email : ''}
            />
            <BarInput
              label="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorText={submitCount > 0 ? errors.password : ''}
            />
            <BarActionButton text="LOG IN" mt={10} onPress={handleSubmit} />
          </View>
        )}
      />
    </RootView>
  );
};

export default LoginScreen;
