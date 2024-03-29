import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextHuge, TextMedium } from '../../components/MyText';
import { MyInput } from '../../components/MyInput';
import { Button } from '../../components/MyButton';
import { Logo } from '../../components/Logo';
import { ContainerAlign, ContainerImage, ContainerJustify } from '../../library/utils/styledGlobal';
import { colors } from '../../library/utils/theme';



const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  return (
    <ContainerImage source={require('../../assets/img/imagen1.jpg')}>
      <Logo color={colors.primary} size={'150px'}/>
      <ContainerAlign align={'flex-start'} >
        <TextHuge color={colors.white} shadow>
          Sign Up
        </TextHuge>
      </ContainerAlign >
      <MyInput placeholder={'Your email address'} 
        onChangeText={value => setEmail(value)}
        value={email} disabled={email?true:false}
      />
      <MyInput placeholder={'Password'} 
        onChangeText={value => setPassword(value)}
        value={password} disabled={password?true:false}
      />
      
      <Button color={colors.primary} text={'Sign Up'} onPress={()=> {navigation.navigate('Root')}}/>
      <TextMedium bold color={colors.white} shadow>Or</TextMedium>
      <Button color={colors.primary} icon text={'Sign Up with Google'}/>
      <ContainerJustify justify={'flex-end'} p={'10px 0px'}>
        <TextMedium bold color={colors.white}>Have an Account? </TextMedium>
        <TouchableOpacity  onPress={()=> navigation.navigate('SignIn')}>
          <TextMedium bold shadow color={'#f75f6a'}>
            Sign In
          </TextMedium>
        </TouchableOpacity>
      </ContainerJustify>
    </ContainerImage>
  )
}

export default SignUpScreen;
