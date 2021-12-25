import React from 'react'

interface HeaderProps {
  logo: string;
  navigation: any;
}

export const Header = ({ logo, navigation }: HeaderProps): JSX.Element => (
  <div>Header</div>
)