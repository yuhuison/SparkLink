import { getChainId } from './getWalletAccountandChainID';
import web3 from './web3';

const abi = [
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'DAO_router_address01',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'DAO_router_address02',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'uniswapRouterAddress',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'factoryAddress',
				'type': 'address'
			}
		],
		'stateMutability': 'nonpayable',
		'type': 'constructor'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'owner',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'approved',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'Approval',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'owner',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'operator',
				'type': 'address'
			},
			{
				'indexed': false,
				'internalType': 'bool',
				'name': 'approved',
				'type': 'bool'
			}
		],
		'name': 'ApprovalForAll',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'uint64',
				'name': 'NFT_id',
				'type': 'uint64'
			},
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'receiver',
				'type': 'address'
			},
			{
				'indexed': false,
				'internalType': 'uint128',
				'name': 'amount',
				'type': 'uint128'
			}
		],
		'name': 'Claim',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'uint64',
				'name': 'NFT_id',
				'type': 'uint64'
			},
			{
				'indexed': false,
				'internalType': 'uint128',
				'name': 'transfer_price',
				'type': 'uint128'
			}
		],
		'name': 'DeterminePrice',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'uint64',
				'name': 'NFT_id',
				'type': 'uint64'
			},
			{
				'indexed': false,
				'internalType': 'uint128',
				'name': 'transfer_price',
				'type': 'uint128'
			},
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'to',
				'type': 'address'
			}
		],
		'name': 'DeterminePriceAndApprove',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'uint64',
				'name': 'NFT_id',
				'type': 'uint64'
			},
			{
				'indexed': false,
				'internalType': 'string',
				'name': 'content',
				'type': 'string'
			}
		],
		'name': 'Label',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'previousOwner',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'newOwner',
				'type': 'address'
			}
		],
		'name': 'OwnershipTransferred',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'publisher',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'uint64',
				'name': 'rootNFTId',
				'type': 'uint64'
			},
			{
				'indexed': false,
				'internalType': 'address',
				'name': 'token_addr',
				'type': 'address'
			}
		],
		'name': 'Publish',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'uint8',
				'name': 'old_DAO_fee',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint8',
				'name': 'new_DAO_fee',
				'type': 'uint8'
			}
		],
		'name': 'SetDAOFee',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'address',
				'name': 'old_router_address',
				'type': 'address'
			},
			{
				'indexed': false,
				'internalType': 'address',
				'name': 'new_router_address',
				'type': 'address'
			}
		],
		'name': 'SetDAORouter01',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'address',
				'name': 'old_router_address',
				'type': 'address'
			},
			{
				'indexed': false,
				'internalType': 'address',
				'name': 'new_router_address',
				'type': 'address'
			}
		],
		'name': 'SetDAORouter02',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'uint8',
				'name': 'old_loss_ratio',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint8',
				'name': 'new_loss_ratio',
				'type': 'uint8'
			}
		],
		'name': 'SetLoosRatio',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'uint64',
				'name': 'NFT_id',
				'type': 'uint64'
			},
			{
				'indexed': false,
				'internalType': 'bytes32',
				'name': 'old_URI',
				'type': 'bytes32'
			},
			{
				'indexed': false,
				'internalType': 'bytes32',
				'name': 'new_URI',
				'type': 'bytes32'
			}
		],
		'name': 'SetURI',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'from',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'to',
				'type': 'address'
			},
			{
				'indexed': true,
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'Transfer',
		'type': 'event'
	},
	{
		'inputs': [],
		'name': 'DAO_fee',
		'outputs': [
			{
				'internalType': 'uint8',
				'name': '',
				'type': 'uint8'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'DAO_router01',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'DAO_router02',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'MAX_DAO_FEE',
		'outputs': [
			{
				'internalType': 'uint8',
				'name': '',
				'type': 'uint8'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'MAX_LOSS_RATIO',
		'outputs': [
			{
				'internalType': 'uint8',
				'name': '',
				'type': 'uint8'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'acceptShill',
		'outputs': [],
		'stateMutability': 'payable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'to',
				'type': 'address'
			},
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'approve',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'owner',
				'type': 'address'
			}
		],
		'name': 'balanceOf',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'claimProfit',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			},
			{
				'internalType': 'uint128',
				'name': '_price',
				'type': 'uint128'
			}
		],
		'name': 'determinePrice',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			},
			{
				'internalType': 'uint128',
				'name': '_price',
				'type': 'uint128'
			},
			{
				'internalType': 'address',
				'name': '_to',
				'type': 'address'
			}
		],
		'name': 'determinePriceAndApprove',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'getApproved',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getDepthByNFTId',
		'outputs': [
			{
				'internalType': 'uint64',
				'name': '',
				'type': 'uint64'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getEditionIdByNFTId',
		'outputs': [
			{
				'internalType': 'uint32',
				'name': '',
				'type': 'uint32'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getFatherByNFTId',
		'outputs': [
			{
				'internalType': 'uint64',
				'name': '',
				'type': 'uint64'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getIsFreeByNFTId',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getIsNCByNFTId',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getIsNDByNFTId',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'getLossRatio',
		'outputs': [
			{
				'internalType': 'uint8',
				'name': '',
				'type': 'uint8'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getNFTInfoByNFTID',
		'outputs': [
			{
				'internalType': 'uint64',
				'name': 'issue_information',
				'type': 'uint64'
			},
			{
				'internalType': 'uint64',
				'name': 'father_id',
				'type': 'uint64'
			},
			{
				'internalType': 'uint128',
				'name': 'shill_price',
				'type': 'uint128'
			},
			{
				'internalType': 'uint16',
				'name': 'remain_shill_times',
				'type': 'uint16'
			},
			{
				'internalType': 'uint128',
				'name': 'profit',
				'type': 'uint128'
			},
			{
				'internalType': 'string',
				'name': 'metadata',
				'type': 'string'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getProfitByNFTId',
		'outputs': [
			{
				'internalType': 'uint128',
				'name': '',
				'type': 'uint128'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getRemainShillTimesByNFTId',
		'outputs': [
			{
				'internalType': 'uint16',
				'name': '',
				'type': 'uint16'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getRootNFTIdByNFTId',
		'outputs': [
			{
				'internalType': 'uint64',
				'name': '',
				'type': 'uint64'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getRoyaltyFeeByNFTId',
		'outputs': [
			{
				'internalType': 'uint8',
				'name': '',
				'type': 'uint8'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: '_NFT_id',
				type: 'uint64'
			}
		],
		name: 'getRoyaltyFeeByNFTId',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getShillPriceByNFTId',
		'outputs': [
			{
				'internalType': 'uint128',
				'name': '',
				'type': 'uint128'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getShillTimesByNFTId',
		'outputs': [
			{
				'internalType': 'uint16',
				'name': '',
				'type': 'uint16'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getTokenAddrByNFTId',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getTotalAmountByNFTId',
		'outputs': [
			{
				'internalType': 'uint32',
				'name': '',
				'type': 'uint32'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'getTransferPriceByNFTId',
		'outputs': [
			{
				'internalType': 'uint128',
				'name': '',
				'type': 'uint128'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'owner',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'operator',
				'type': 'address'
			}
		],
		'name': 'isApprovedForAll',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'isEditionExisting',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'isRootNFT',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			},
			{
				'internalType': 'string',
				'name': 'content',
				'type': 'string'
			}
		],
		'name': 'label',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'loss_ratio',
		'outputs': [
			{
				'internalType': 'uint8',
				'name': '',
				'type': 'uint8'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'name',
		'outputs': [
			{
				'internalType': 'string',
				'name': '',
				'type': 'string'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'owner',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'ownerOf',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint128',
				'name': '_first_sell_price',
				'type': 'uint128'
			},
			{
				'internalType': 'uint8',
				'name': '_royalty_fee',
				'type': 'uint8'
			},
			{
				'internalType': 'uint16',
				'name': '_shill_times',
				'type': 'uint16'
			},
			{
				'internalType': 'bytes32',
				'name': '_ipfs_hash',
				'type': 'bytes32'
			},
			{
				'internalType': 'address',
				'name': '_token_addr',
				'type': 'address'
			},
			{
				'internalType': 'bool',
				'name': '_is_free',
				'type': 'bool'
			},
			{
				'internalType': 'bool',
				'name': '_is_NC',
				'type': 'bool'
			},
			{
				'internalType': 'bool',
				'name': '_is_ND',
				'type': 'bool'
			}
		],
		'name': 'publish',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'renounceOwnership',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'from',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'to',
				'type': 'address'
			},
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'safeTransferFrom',
		'outputs': [],
		'stateMutability': 'payable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'from',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'to',
				'type': 'address'
			},
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			},
			{
				'internalType': 'bytes',
				'name': '_data',
				'type': 'bytes'
			}
		],
		'name': 'safeTransferFrom',
		'outputs': [],
		'stateMutability': 'payable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'operator',
				'type': 'address'
			},
			{
				'internalType': 'bool',
				'name': 'approved',
				'type': 'bool'
			}
		],
		'name': 'setApprovalForAll',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint8',
				'name': '_DAO_fee',
				'type': 'uint8'
			}
		],
		'name': 'setDAOFee',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_DAO_router01',
				'type': 'address'
			}
		],
		'name': 'setDAORouter01',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_DAO_router02',
				'type': 'address'
			}
		],
		'name': 'setDAORouter02',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint8',
				'name': '_loss_ratio',
				'type': 'uint8'
			}
		],
		'name': 'setLoosRatio',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			},
			{
				'internalType': 'bytes32',
				'name': 'ipfs_hash',
				'type': 'bytes32'
			}
		],
		'name': 'setURI',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_uniswapV2Factory',
				'type': 'address'
			}
		],
		'name': 'setUniswapV2Factory',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_uniswapV2Router',
				'type': 'address'
			}
		],
		'name': 'setUniswapV2Router',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'bytes4',
				'name': 'interfaceId',
				'type': 'bytes4'
			}
		],
		'name': 'supportsInterface',
		'outputs': [
			{
				'internalType': 'bool',
				'name': '',
				'type': 'bool'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'symbol',
		'outputs': [
			{
				'internalType': 'string',
				'name': '',
				'type': 'string'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'tokenURI',
		'outputs': [
			{
				'internalType': 'string',
				'name': '',
				'type': 'string'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'from',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': 'to',
				'type': 'address'
			},
			{
				'internalType': 'uint256',
				'name': 'tokenId',
				'type': 'uint256'
			}
		],
		'name': 'transferFrom',
		'outputs': [],
		'stateMutability': 'payable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'newOwner',
				'type': 'address'
			}
		],
		'name': 'transferOwnership',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'uniswapV2Factory',
		'outputs': [
			{
				'internalType': 'contract IUniswapV2Factory',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'uniswapV2Router',
		'outputs': [
			{
				'internalType': 'contract IUniswapV2Router02',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint64',
				'name': '_NFT_id',
				'type': 'uint64'
			}
		],
		'name': 'updateURI',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	}
];

let address = new Object();
address['0x1'] = '0x7187211744c67F8cE89fEAc63b85D8D17417bDfE';  //ETH
address['0x89'] = '0x166BCdc53BC8573448F37C66EF409f1Cb31450a2'; //Matic
address['0x38'] = '0xDc89106504f82642801dc43C8B545Ef7DA95ff2b'; //BSC
let contracts = new Object();
export let nowContractChainId;
for(let id of Object.keys(address)){
	contracts[id] = new web3.eth.Contract(abi, address[id]);
}
let exContract;

export const freshContract = async ()=>{
	console.log('fresh!');
	let id = await getChainId();
	if(contracts[id]&&(nowContractChainId != id)){
		exContract = contracts[id];
		nowContractChainId = id;
		return true;
	}
	return false
}
export function swtichContract(chainId) {
	if (contracts[chainId]) {
		exContract = contracts[chainId];
		nowContractChainId = chainId;
	} else {
		alert('UnExpected ChainID')
		console.error('UnExpected ChainID in Contractjs')
		//switch
	}
}
let getContract = ()=>{
	console.log(exContract)
	return exContract;
};
export function getContractAddress(){
	return address[nowContractChainId];
}
export default getContract;
