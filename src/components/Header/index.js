import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { AuthContext } from './../../contexts/auth'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { logout, userInfo } = useContext(AuthContext)

  const handleOpenMenu = (e) => {
    return setAnchorEl(e.target)
  }

  const handleCloseMenu = () => {
    return setAnchorEl(null)
  }

  return (
    <AppBar>
      <ToolBar>
        <TitleContainer>
          <Typography variant="h5">Maffeezzaria</Typography>
        </TitleContainer>

        <Typography variant="subtitle1">{userInfo.user.displayName}</Typography>

        <IconButton color="inherit" onClick={handleOpenMenu} >
          <AccountCircle />
        </IconButton>

        <Menu
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorEl={anchorEl}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>

      </ToolBar>
    </AppBar>
  )
}

const TitleContainer = styled.div`
  flex-grow: 1;
`

const ToolBar = styled(Toolbar)`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`

export default Header
