import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Debug  "mo:base/Debug";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
actor SignUp{
  let allCredentials: HashMap.HashMap<Text, Nat32> = HashMap.HashMap(100, Text.equal, Text.hash) ;


  public func createNewAccount(username:Text, password: Text) :async Bool{
    if(allCredentials.get(username)!=null)return false;
    allCredentials.put(username,Text.hash(password));
    Debug.print("User created!");
    Debug.print(username);
    Debug.print(debug_show(Text.hash(password)));
    return true;
  };

  public func logIn(username:Text, password: Text) :async Bool{
    if(allCredentials.get(username)==null)return false;
    Debug.print("User credentials");
    Debug.print(username);
    Debug.print(password);
    Debug.print(debug_show(Text.hash(password)));
    let isSuccess = switch(allCredentials.get(username)) {
     case(null) return false;
     case(?pass) Nat32.equal(pass,Text.hash(password));
    };
    Debug.print(debug_show(isSuccess));
    return isSuccess;
  };
};
