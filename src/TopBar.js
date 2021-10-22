import React, { Component } from 'react';
import logo from './imgs/sparkLink.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createTheme, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
//import ChooseWalletDialog from './ChooseWalletDialog'
import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import { GithubOutlined, WalletOutlined, WalletTwoTone, WalletFilled } from '@ant-design/icons';
import Web3 from 'web3';
import metamaskpic from './imgs/metamask.png'
import TPpic from './imgs/TP.png'
import { CenterFocusStrong, Web } from '@material-ui/icons';
import isMobile from './isMobile';

//TP钱包支持
var tp = require('tp-js-sdk');


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#FDFEFE',
    },
  },
});


//todo theme传参无用
const styles = theme => ({
  icon: {
    [theme.breakpoints.down('xl')]: {
      fontSize: 19,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 27,
    },
  },
  titleGrid: {
    marginTop: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  titleToken: {
    fontSize: 22,
    fontFamily: 'Teko',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 22,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 22,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: 22,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 25,
    },
  },
  title: {
    minWidth: 100,
    fontSize: 25,
    fontFamily: 'Teko',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 25,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 25,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 35,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: 35,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 45,
    },
  },
  btnGrid: {
    // marginTop: 25,
    marginBottom: 10,
    minWidth: 370,
    marginTop: 30,
    // backgroundColor: '#e3f2fd',
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '12vw'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: '33vw'
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      marginLeft: '40vw'
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 40,
      marginLeft: '60vw',
    },
  },
  dialog: {
    textAlign: 'center'



  },
  btnImg: {

    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
      width: 100,

    },
    [theme.breakpoints.between('sm', 'md')]: {

      width: 150,

    },
    [theme.breakpoints.between('md', 'lg')]: {

      width: 150,
    },
    [theme.breakpoints.up('xl')]: {

      width: 150,

    },
  },
  btnWallet: {
    color: '#424949',
    borderColor: '#e3f2fd',
    textAlign: 'center',
    fontSize: 15,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
      width: 100,
      height: 100,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 22,
      width: 155,
      height: 155,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
      width: 155,
      height: 155,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 28,
      width: 155,
      height: 155,
    },
  },
  btnUser: {
    color: '#424949',
    borderColor: '#e3f2fd',
    fontSize: 15,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 12,
      width: 100
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
      width: 200
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
    },
  },
  btn: {
    color: '#424949',
    borderColor: '#e3f2fd',
    fontSize: 15,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 18,
      width: 100
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 18,
      width: 100
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 25,
    },
  },
  logo: {
    objectFit: 'contain',
    position: 'fixed',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '30%'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: 200,
      left: 60,
      top: 0
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: 200,
      left: 150,
      top: 0
    },
    [theme.breakpoints.up('xl')]: {
      width: 350,
      left: 160,
      top: -15
    },
  }

});

class TopBar extends Component {

  state = {
    isConnected: false,
    //userAddress: '',
    accountInfo: '',
    dialogOpen: false,
    wallet: '',
  };



  async componentWillMount() {
    //todo 从本地获取登陆状态（登陆记录）

    // if (Web3.givenProvider) {
    //   //console.log(Web3.givenProvider)
    //   //let w3 = new Web3(window.ethereum);
    //   let w3 = new Web3(window.web3.currentProvider);
    //   const accounts = await w3.eth.getAccounts();
    //   if (accounts.length == 0) {
    //     this.setState({
    //       isConnected: false
    //     });
    //   } else {
    //     console.log(accounts)
    //     var account = accounts[0]
    //     this.setState({ accountInfo: account.substring(0, 5), });
    //     this.setState({
    //       isConnected: true
    //     });
    //     localStorage.setItem("userAddress", account);
    //   }
    //   console.log(Web3.givenProvider);
    //   console.log(this.state.isConnected)
    // }
  }

  //点击使用tokenpocket
  handleSelectTokenPockect = () => {
    this.getTokenPocketAccount()
    this.setState({
      dialogOpen: false,
    });

  }

  //点击使用MetaMask
  handleSelectMetaMask = () => {
    this.getMetaMaskAccount()
    this.setState({
      dialogOpen: false,
    });
  }

  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    })
  }

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    })
  }

  sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


  //获取MetaMask用户地址
  getMetaMaskAccount = async () => {
    try {
      //const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await window.web3.currentProvider.request({ method: 'eth_requestAccounts' })
      const account = accounts[0];
      alert('您已经连接metamask, 当前账户： ' + account)
      this.setState({ isConnected: true, });
      //this.setState({ userAddress: account });
      localStorage.setItem("userAddress", account);
    } catch (error) {
      console.debug(error)
      this.setState({ isConnected: false, });
    }
  }

  //获取TokenPocket用户地址
  getTokenPocketAccount = async () => {
    try {
      //todo 使用TP链接
      let account;
      await tp.getWallet({ walletTypes: ['matic'], switch: false }).then(
        value => {
          account = value.data.address;
        }
      )
      alert('您已经连接tokenpocket, 当前账户： ' + account)
      this.setState({ isConnected: true, });
      //this.setState({ userAddress: account });
      localStorage.setItem("userAddress", account);
    } catch (error) {
      console.debug(error);
      this.setState({ isConnected: false });
    }
  }

  //logout
  //todo 未做登出
  disconnect = () => {
    this.setState({isConnected:false})
    localStorage.removeItem("userAddress")

  }



  render() {
    const { classes } = this.props

    return (
      <div>
        <Dialog className={classes.dialog} onClose={this.handleDialogClose} open={this.state.dialogOpen}>
          <DialogTitle className={console.title}>
            <Typography component="h1" color="inherit" noWrap className={classes.title} >
              Connect Wallet
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              <Button size="large" className={classes.btnWallet} id='MetaMask' onClick={this.handleSelectMetaMask} >
                <img className={classes.btnImg} src={metamaskpic}></img>
              </Button>
              <Button size="large" className={classes.btnWallet} onClick={!isMobile ? this.handleSelectMetaMask : this.handleSelectTokenPockect}>
                <img className={classes.btnImg} src={TPpic}></img>
              </Button>
            </Grid>
            <Grid>
              <Typography component="h1" color="inherit" style={{ textAlign: 'center' }} noWrap className={classes.title} >
                . . .
              </Typography>
            </Grid>
          </DialogContent>



        </Dialog>

        <Toolbar>
          <Grid container direction="row" justifyContent="flex-start" >
            <Grid item className={classes.titleGrid} xs={2}>
              <Typography component="h1" color="inherit" noWrap className={classes.title} >
                <a href='/#/' >
                  <img alt="logo" src={logo} className={classes.logo} />
                </a>
              </Typography>
            </Grid>
            <Grid item className={classes.btnGrid}>
              <Button size="large" className={classes.btn} href='/#/' >
                <b>首页</b>
              </Button>
              <Button size="large" className={classes.btn} href='/#/introPublish'>
                <b>发布</b>
              </Button>
              <Button size="large" className={classes.btn} href='/#/collections'>
                <b>我的收藏</b>
              </Button>
              <Button size="large" href='https://github.com/SparkNFT' target="_blank">
                <GithubOutlined className={classes.icon} />
              </Button>
              {this.state.isConnected ? (
                // <Button onClick={this.getAccount}>
                //   <WalletTwoTone className={classes.icon} />
                // </Button>
                <Button size="large" variant="contained" className={classes.btnUser} onClick={this.getMetaMaskAccount}>
                  <Typography component="" color="inherit" noWrap className={classes.titleToken} >
                    <WalletOutlined />
                    {localStorage.getItem("userAddress")}
                  </Typography>

                </Button>

              ) : (
                // <Button onClick={this.getAccount}>
                //   <WalletFilled className={classes.icon} />
                // </Button>
                <Button variant="contained" className={classes.btnUser} onClick={this.handleDialogOpen}>
                  <b>Connect Wallet</b>
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
/*
todo目前TP兼容仅作TopBar上的登陆，未处理其他交互的TP支持
未做移动端的自适应
connect Wallet界面UI待更改
*/
