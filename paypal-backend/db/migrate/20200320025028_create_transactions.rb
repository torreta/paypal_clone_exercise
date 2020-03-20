class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.decimal :amount, :precision => 8, :scale => 2, :default => 0
      t.references :sender, foreign_key: { to_table: 'users' }
      t.references :receiver, foreign_key: { to_table: 'users' }

      t.timestamps
    end
  end
end
