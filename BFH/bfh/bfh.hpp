#include <eosiolib/eosio.hpp>

using namespace std;
using namespace eosio;
class [[eosio::contract]] bfh : public eosio::contract {
  private:

    struct [[eosio::table]] user_info {
      name            username;
      int             relationship;
      int             living;
      char            disease;
      char            onsetAge;
      char            deathAge;

      auto primary_key() const { return username.value; }

    };

  typedef eosio::multi_index<name("users"), user_info> users_table;

  users_table _users;

  public:

    bfh( name receiver, name code, datastream<const char*> ds ):contract(receiver, code, ds),
                       _users(receiver, receiver.value) {}

    [[eosio::action]]
     void login(name username);
};
