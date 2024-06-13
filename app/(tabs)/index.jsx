import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Home() {
  return (
   <>

   {Switch? <Container>
      <Card>
        <IconContainer>
          <LeafIcon width={48} height={48} fill="#2ecc71" />
          <Title>EcoRangers</Title>
          <Subtitle>Donate and help plant trees for a sustainable future.</Subtitle>
        </IconContainer>
        <Form>
          <InputWrapper>
            <Label>Email</Label>
            <StyledTextInput onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="m@example.com" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <StyledTextInput onChange={(e)=>setPass(e.target.value)} value={pass} placeholder="Password" secureTextEntry />
          </InputWrapper>
          <StyledButton onPress={()=>router.push('/otro/map')} >
            <ButtonText >Sign In</ButtonText>
          </StyledButton>
        </Form>
        <Footer>
          <StyledLink onPress={()=>{
            setSwitch(!Switch)}}>Create an account</StyledLink>
          <SocialIcons>
            <IconButton><ChromeIcon width={20} height={20} /></IconButton>
            <IconButton><FacebookIcon width={20} height={20} /></IconButton>
            <IconButton><TwitterIcon width={20} height={20} /></IconButton>
          </SocialIcons>
        </Footer>
      </Card>
    </Container>
    :
    <Container>
      <Card>
        <IconContainer>
          <LeafIcon width={48} height={48} fill="#2ecc71" />
          <Title>EcoRangers</Title>
          <Subtitle>Donate and help plant trees for a sustainable future.</Subtitle>
        </IconContainer>
        <Form>
          <InputWrapper>
            <Label>Username</Label>
            <StyledTextInput placeholder="m@example.com" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <StyledTextInput  onChange={(e)=>setRegisterEmail(e.target.value)} value={registerEmail} placeholder="m@example.com" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <StyledTextInput onChange={(e)=>setRegisterPass(e.target.value)} value={registerPass} placeholder="Password" secureTextEntry />
          </InputWrapper>
          <InputWrapper>
            <Label>Verify Password</Label>
            <StyledTextInput placeholder="Password" secureTextEntry />
          </InputWrapper>
          <InputWrapper>
            <Label >Fecha de nacinamiento</Label>
            <StyledTextInput onPress={()=>{ setDatePickerVisibility(true)}}
            placeholder="01-08-1999"
            placeholderTextColor="gray"
            editable={false}
            value={selectedDate ? selectedDate.toDateString() : ''}/>
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            />
          </InputWrapper>
          <StyledButton onPress={async()=>{
            setSwitch(!Switch)
                }} >
            <ButtonText >Create Account</ButtonText>
          </StyledButton>
        </Form>
        <Footer>
          <StyledLink onPress={()=>{setSwitch(!Switch)}} >Sign In</StyledLink>
          <SocialIcons>
            <IconButton><ChromeIcon width={20} height={20} /></IconButton>
            <IconButton><FacebookIcon width={20} height={20} /></IconButton>
            <IconButton><TwitterIcon width={20} height={20} /></IconButton>
          </SocialIcons>
        </Footer>
      </Card>
    </Container>
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subGreeting: {
    fontSize: 16,
    color: '#2ecc71',
  },
  searchBar: {
    marginVertical: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#E0F7E9',
    padding: 10,
    borderRadius: 5,
  },
  filterText: {
    color: '#000',
    fontWeight: 'bold',
  },
  scrollView: {
    marginVertical: 20,
  },
  folderCard: {
    backgroundColor: '#2ecc71',
    padding: 20,
    borderRadius: 10,
    marginRight: 20,
  },
  folderCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  folderCardSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  recentFiles: {
    marginVertical: 20,
  },
  recentFilesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  file: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  fileName: {
    color: '#000',
  },
  fileTime: {
    color: '#2ecc71',
  },
});
