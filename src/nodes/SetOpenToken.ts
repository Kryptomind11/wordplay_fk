import { SET_OPEN_SYMBOL } from '@parser/Symbols';
import Sym from './Sym';
import Token from './Token';

export default class SetOpenToken extends Token {
    constructor() {
        super(SET_OPEN_SYMBOL, Sym.SetOpen);
    }
}
