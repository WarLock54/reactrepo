import PropTypes from "prop-types";
function User({name2,surname2,giris2,arkadaslar,age,adress}){
   return(
<>
    {adress.apt}{adress.baslık}
</>
   );
 
}
// deerlerin hangi türde oldugunu tanımlatır.
User.propTypes={
    name2: PropTypes.string.isRequired,
    surname2: PropTypes.string.isRequired,
    age: PropTypes.number,
    arkadaslar: PropTypes.array,
    adress:PropTypes.shape({
        baslık:PropTypes.string,
        apt:PropTypes.number,
    })
}
// varsaylan değer atar
User.defaultProps={
    giris2:false,


}
export default User